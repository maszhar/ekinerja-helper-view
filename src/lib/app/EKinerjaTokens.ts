export class EKinerjaTokens {
    constructor(
        public accessToken: string,
        public xsrfToken: string,
        public sessionAuth: string,
        public cookieAuth: string
    ) {
    }
}