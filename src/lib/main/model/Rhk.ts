import { Indikator } from "./Indikator";

export class Rhk {
    constructor(public id: string, public bagian: string, public jenis: string, public deskripsi: string, public indikatorList: Indikator[]) {

    }

    static fromJsonable(data: any): Rhk {
        const indikatorList = data.indikators.map((item: any) => Indikator.fromJsonable(item))
        return new Rhk(data.rhk_id, data.bagian, data.jenis, data.rhk, indikatorList)
    }
}