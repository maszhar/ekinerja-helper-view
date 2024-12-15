import type { EKinerjaTokens } from "./EKinerjaTokens";

export class EKinerjaSession {
    constructor(public tokens: EKinerjaTokens, public name: string) {

    }
}