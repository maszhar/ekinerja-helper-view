export class Rhk {
    constructor(public id: string, public bagian: string, public jenis: string, public deskripsi: string) {

    }

    static fromJsonable(data: any): Rhk {
        return new Rhk(data.rhk_id, data.bagian, data.jenis, data.rhk)
    }
}