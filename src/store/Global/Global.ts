import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { snackBarInterface } from "@/store/Global/Interfaces/Interface";



@Module
export default class Global extends VuexModule {
    enablePWA: boolean = true;
    snackBarData: snackBarInterface = {message: '', color: ''};

    @Action
    onAuthChange(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.context.commit('setCurrentUser', user)
            } else {
                this.context.dispatch('logOut')
            }
        });
    }


    @Action
    onEnablePWA(){
        firebase.firestore().enablePersistence()
            .catch(function(err) {
                if (err.code == 'failed-precondition') {
                    // Multiple tabs open, persistence can only be enabled
                    // in one tab at a a time.
                    // ...
                } else if (err.code == 'unimplemented') {
                    // The current browser does not support all of the
                    // features required to enable persistence
                    // ...
                }
            });
    }

    @Mutation
    addSnackBarMessage(message: snackBarInterface){
        this.snackBarData = message;
    }

    @Mutation
    clearSnackBar(){
        this.snackBarData = {message: '', color: ''};
    }

    get snackBar(){
        return this.snackBarData;
    }

    get pwaStatus(){
        return this.enablePWA;
    }


}
