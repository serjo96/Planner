import {ResponseError} from "./Auth/interfaces/singUp";
import UserModule from "./User";

export interface State {
    Auth: {
        singUpData: any;
        singUpError: ResponseError;
    },
    UserModule: {
        currentUser: any;
    };
}


