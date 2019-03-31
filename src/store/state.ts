import {ResponseError} from "@/Core/Interfaces/Global";
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


