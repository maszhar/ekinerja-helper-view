import { Indikator } from "./Indikator";
import type { RencanaAksi } from "./RencanaAksi";

export class Rhk {
    constructor(
        public id: string,
        public bagian: string,
        public jenis: string,
        public deskripsi: string,
        public indikatorList: Indikator[],
        public rencanaAksi: RencanaAksi | null = null
    ) {

    }

    static fromJsonable(data: any): Rhk {
        const indikatorList = data.indikators.map((item: any) => Indikator.fromJsonable(item))
        return new Rhk(data.rhk_id, data.bagian, data.jenis, data.rhk, indikatorList)
    }
}