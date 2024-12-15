import { writable } from "svelte/store";
import type { EKinerjaSession } from "./EKinerjaSession";

export class GlobalData {
    private ekinerjaSession$$ = writable<EKinerjaSession | null>(null)

    constructor() {

    }

    setEkinerjaSession(tokens: EKinerjaSession) {
        this.ekinerjaSession$$.set(tokens)
    }

    clearEkinerjaSession() {
        this.ekinerjaSession$$.set(null)
    }

    getEkinerjaSession$$() {
        return this.ekinerjaSession$$
    }
}