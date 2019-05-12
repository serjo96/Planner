import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import * as firebase from 'firebase';


@Module
export default class InviteUser extends VuexModule {
    @Action({rawError: true})
    createInviteUser(email: string) {
        let inviteFunction = firebase.functions().httpsCallable('createInviteUser');

        inviteFunction(email)
            .then((result) => {
            // Read result of the Cloud Function.
           console.log(result);
        })
            .catch(err=>{
                console.log(err)
            });
    }

}
