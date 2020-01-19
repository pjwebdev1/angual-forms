export class User {
    constructor (
        public street: string,
        public city: string,
        public province: string,
        public postalCode: string,
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public preference: string,
        public subscribe: boolean
    ) {}
}