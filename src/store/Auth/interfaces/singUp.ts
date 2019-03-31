import {ResponseError} from "@/Core/Interfaces/Global";

export interface SingUpActionPayload {
    password: string;
    email: string;
}

export interface SingUpMutationPayload {
    type: string;
    error: ResponseError;
    result?: any;
}

