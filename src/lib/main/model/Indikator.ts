import { StringUtils } from "$lib/utils/StringUtils"

export class Indikator {
    constructor(public id: string, public aspek: string, public deskripsi: string, public target: number, public satuanTarget: string) {

    }

    static fromJsonable(data: any): Indikator {
        const target = StringUtils.extractJumlahDanSatuan(data.target)
        return new Indikator(data.id, data.aspek, data.indikator, target.jumlah, target.satuan)
    }
}