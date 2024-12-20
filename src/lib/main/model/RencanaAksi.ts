import { StringUtils } from "$lib/utils/StringUtils";
import type { PeriodePenilaian } from "./PeriodePenilaian";

export class RencanaAksi {
    constructor(
        public id: string,
        public deskripsi: string,
        public target: number,
        public satuanTarget: string,
        public periodePenilaian: PeriodePenilaian
    ) {

    }

    static fromJsonable(data: any, periodePenilaian: PeriodePenilaian): RencanaAksi {
        const jumlahDanSatuanTarget = StringUtils.extractJumlahDanSatuan(data.target)
        return new RencanaAksi(data.id, data.deskripsi, jumlahDanSatuanTarget.jumlah, jumlahDanSatuanTarget.satuan, periodePenilaian)
    }
}