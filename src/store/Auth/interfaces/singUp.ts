export interface ResponseError {
    code: string;
    message: string;
}

export interface SingUpActionPayload {
    password: string;
    email: string;
}

export interface SingUpMutationPayload {
    type: string;
    error: ResponseError;
    result?: any;
}

