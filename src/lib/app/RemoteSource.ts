import { get as svGet } from "svelte/store"
import type { GlobalData } from "./GlobalData"

export class HttpConnectionError extends Error {

}

export class HttpError extends Error {
    constructor(public status: number, public response: Response | null) {
        super(`Http error with status: ${status}`)
    }
}

export enum TargetServer {
    EKINERJA = 0,
    GDRIVE = 1
}

export class RemoteSource {
    constructor(private globalData: GlobalData) { }

    async get(target: TargetServer, privateReq: boolean, path: string): Promise<Response> {
        return await this.sendHttpRequest(target, privateReq, path, "GET")
    }

    private async sendHttpRequest(target: TargetServer, privateReq: boolean, path: string, method: "GET" | "POST" | "UPDATE" | "DELETE"): Promise<Response> {
        let baseUrl = ""
        switch (target) {
            case TargetServer.EKINERJA:
                baseUrl = RemoteSource.BASE_EKINERJA_URL
                break
            case TargetServer.GDRIVE:
                baseUrl = ""
                break
        }

        const requestOptions: RequestInit = {
            method
        }

        if (privateReq) {
            if (target == TargetServer.EKINERJA) {
                const ekinerjaSession = await svGet(this.globalData.getEkinerjaSession$$())
                if (!ekinerjaSession) {
                    throw new HttpError(401, null)
                }

                requestOptions.headers = {
                    Authorization: `Bearer ${ekinerjaSession.tokens.accessToken}`,
                    "X-Xsrf-Token": ekinerjaSession.tokens.xsrfToken
                }
            }
        }

        try {
            const response = await fetch(baseUrl + path, requestOptions)
            if (response.status >= 300) {
                throw new HttpError(response.status, response)
            }

            return response
        } catch (e: any) {
            console.error(e)
            throw new HttpConnectionError()
        }
    }

    private static BASE_EKINERJA_URL = "https://kinerja.bkn.go.id/api"
}