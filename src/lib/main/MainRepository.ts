import { TargetServer, type RemoteSource } from "$lib/app/RemoteSource";
import { Skp } from "./model/Skp";

export class MainRepository {
    constructor(private remoteSource: RemoteSource) { }

    async getSkpList(): Promise<Skp[]> {
        const response = await this.remoteSource.get(TargetServer.EKINERJA, true, "/skp?master=1")

        const respBody = await response.json()

        const skpList: Skp[] = []
        for (const item of respBody.data) {
            skpList.push(Skp.fromJsonable(item))
        }

        return skpList
    }
}