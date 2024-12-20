export class PeriodePenilaian {
    constructor(
        public id: string,
        public nama: string,
        public periodeAwal: Date,
        public periodeAkhir: Date
    ) { }

    static fromJsonable(data: any): PeriodePenilaian {
        return new PeriodePenilaian(data.id_penilaian, data.nama, data.periode_awal, data.periode_akhir)
    }
}