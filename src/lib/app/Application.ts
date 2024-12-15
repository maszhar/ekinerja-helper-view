import { GlobalData } from "./GlobalData";

export class Application {
    private data = new GlobalData()

    private constructor(
    ) { }

    getGlobalData(): GlobalData {
        return this.data
    }

    static INSTANCE = new Application()
}