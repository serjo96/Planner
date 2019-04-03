import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import * as firebase from 'firebase';
import {ResponseError} from "@/Core/Interfaces/Global";

const localUser = localStorage.getItem('user');

@Module
export default class UserModule extends VuexModule {
    currentUser = localUser !== null ? JSON.parse(localUser): null;

    @Action
    takeCurrentUser(){
        this.context.commit('setCurrentUser', firebase.auth().currentUser);
    }

    @Mutation
    setCurrentUser(payload: any){
        const userInfo = {...payload.providerData[0], uid: payload.uid};
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.currentUser = userInfo;
    }

    @Action
    updateProfile(name: string, photo: string){

        firebase.auth().currentUser!.updateProfile({
                displayName: name,
                photoURL: photo
            })
            .catch((err: ResponseError)=> {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            });
    }

    get userData(){
        return this.currentUser;
    }

}
