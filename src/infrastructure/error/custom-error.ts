import {HttpStatusCode} from './http-status-code';

export class CustomError extends Error {
    public message!: string;
    public status!: number;

    constructor(message: string) {
        super();
        this.message = message;
        this.status = HttpStatusCode.BAD_REQUEST;
    }
}
