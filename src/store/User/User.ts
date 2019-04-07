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
        const userInfo = payload ? {...payload.providerData[0], uid: payload.uid}: null;
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.currentUser = userInfo;
    }

    @Action({rawError: true})
    updateName(name: string){
        firebase.auth().currentUser!.updateProfile({
                displayName: name,
                photoURL: this.currentUser.photoURL
            })
            .then(()=> {
                this.context.dispatch('takeCurrentUser');
                this.context.commit('addSnackBarMessage', {
                    message: 'Name success changed',
                    color: 'success'
                });
            })
            .catch((err: ResponseError)=> {
                const errorMessage = JSON.parse(err.message);
                this.context.commit('addSnackBarMessage', {
                    message: errorMessage.error.message,
                    color: 'error'
                });
            });
    }

    @Action({rawError: true})
    changeEmail({email, password} : {email: string; password: string}){
        console.log(password)
        this.context.dispatch('reauthenticate' ,password)
            .then(
            ()=>{
                firebase.auth().currentUser!.updateEmail(email)
                    .then(()=> {
                        this.context.dispatch('takeCurrentUser');
                        this.context.commit('addSnackBarMessage', {
                            message: 'Email success changed',
                            color: 'success'
                        });
                    })
                    .catch((err: ResponseError)=> {
                        this.context.commit('addSnackBarMessage', {
                            message: err.message,
                            color: 'error'
                        });
                    });
            }
        ).catch((err: ResponseError)=> {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            });
    }

    @Action({rawError: true})
    reauthenticate(currentPassword: string){
        const user = firebase.auth().currentUser;
        const cred = firebase.auth.EmailAuthProvider.credential(
            this.currentUser.email, currentPassword);
        return user!.reauthenticateWithCredential(cred);
    };

    get userData(){
        return this.currentUser;
    }

}
