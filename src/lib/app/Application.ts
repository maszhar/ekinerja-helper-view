import { GlobalData } from "./GlobalData";
import { RemoteSource } from "./RemoteSource";

export class Application {
    private data = new GlobalData()
    private remoteSource = new RemoteSource(this.data)

    private constructor(
    ) { }

    getGlobalData(): GlobalData {
        return this.data
    }

    getRemoteSource(): RemoteSource {
        return this.remoteSource
    }

    static INSTANCE = new Application()
}