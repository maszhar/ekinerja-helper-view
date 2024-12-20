import { TargetServer, type RemoteSource } from "$lib/app/RemoteSource";
import { PeriodePenilaian } from "./model/PeriodePenilaian";
import { RencanaAksi } from "./model/RencanaAksi";
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

        return rhkList
    }

    async getRencanaAksiList(skp: Skp, periodePenilaian: PeriodePenilaian): Promise<RencanaAksi[]> {
        const response = await this.remoteSource.get(TargetServer.EKINERJA, true, `/skp/${skp.id}/penilaian/${periodePenilaian.periode}/rencana_aksi`)
        const respBody = await response.json();

        this.cleanRencanaAksiListInRhkList(skp)

        const rencanaAksiList: RencanaAksi[] = []
        for (const item of respBody.data.rencana_aksi) {
            const rhk = skp.rhkList.find((rhkItem) => rhkItem.id == item.rhk_id)
            if (!rhk || typeof item.rencana_aksi == "undefined" || item.rencana_aksi.length == 0) {
                continue
            }
            const rencanaAksi = RencanaAksi.fromJsonable(item.rencana_aksi[0], periodePenilaian)
            rhk.rencanaAksi = rencanaAksi
            rencanaAksiList.push(rencanaAksi)
        }

        return rencanaAksiList
    }

    private cleanRencanaAksiListInRhkList(skp: Skp) {
        for (const rhk of skp.rhkList) {
            rhk.rencanaAksi = null;
        }
    }

    async getPeriodePenilaianList(skp: Skp): Promise<PeriodePenilaian[]> {
        const response = await this.remoteSource.get(TargetServer.EKINERJA, true, `/skp/${skp.id}/penilaian?master=1`)
        const respBody = await response.json()

        const periodePenilaianList: PeriodePenilaian[] = []
        for (const item of respBody.data.penilaian) {
            const periodePenilaian = PeriodePenilaian.fromJsonable(item)
            periodePenilaianList.push(periodePenilaian)
        }
        skp.periodePenilaianList = periodePenilaianList

        return periodePenilaianList
    }
}