import { writable } from "svelte/store";
import type { EKinerjaTokens } from "./EKinerjaTokens";

export class GlobalData {
    private ekinerjaTokens$$ = writable<EKinerjaTokens | null>(null)

    constructor() {

    }

    setEkinerjaTokens(tokens: EKinerjaTokens) {
        this.ekinerjaTokens$$.set(tokens)
    }

    clearEkinerjaTokens() {
        this.ekinerjaTokens$$.set(null)
    }

    getEkinerjaTokens$$() {
        return this.ekinerjaTokens$$
    }
}