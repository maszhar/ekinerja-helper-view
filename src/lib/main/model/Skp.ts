import type { Rhk } from "./Rhk";

export class Skp {
    constructor(public id: string, public tahun: number, public periodeAwal: Date, public periodeAkhir: Date, public rhkList: Rhk[] = []) {

    }

    static fromJsonable(data: any): Skp {
        return new Skp(data.id, data.tahun, new Date(data.periode_awal), new Date(data.periode_akhir))
    }
}