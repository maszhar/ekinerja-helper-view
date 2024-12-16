import { TargetServer, type RemoteSource } from "$lib/app/RemoteSource";
import { Rhk } from "./model/Rhk";
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

    async getRhkList(skp: Skp): Promise<Rhk[]> {
        const response = await this.remoteSource.get(TargetServer.EKINERJA, true, `/skp/${skp.id}?master=1`)
        const respBody = await response.json()

        const rhkList: Rhk[] = []
        for (const item of respBody.data.kinerja) {
            rhkList.push(Rhk.fromJsonable(item))
        }

        skp.rhkList = rhkList

        console.log(rhkList)

        return rhkList
    }
}