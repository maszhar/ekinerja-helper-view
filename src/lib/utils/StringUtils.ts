import { JumlahDanSatuan } from "$lib/main/model/JumlahDanSatuan";

export class StringUtils {
    static extractJumlahDanSatuan(data: string): JumlahDanSatuan {
        let jumlah = 0;
        let satuan = "";
        let pecahan = 0;

        let nonNumericDetected = false
        let commaDetected = false

        for (let i = 0; i < data.length; i++) {
            const currChar = data.charAt(i)

            if (nonNumericDetected) {
                satuan += currChar
            } else {
                if (/^[0-9]$/.test(currChar)) {
                    if (commaDetected) {
                        pecahan = pecahan * 10 + parseInt(currChar)
                    } else {
                        jumlah = jumlah * 10 + parseInt(currChar)
                    }
                } else {
                    if (currChar == "." || currChar == ",") {
                        if (commaDetected) {
                            nonNumericDetected = true
                            satuan += currChar
                            continue
                        } else {
                            commaDetected = true
                        }
                    } else {
                        nonNumericDetected = true
                        if (currChar != " ") {
                            satuan += currChar
                        }
                    }
                }
            }
        }

        return new JumlahDanSatuan(jumlah, satuan)
    }
}