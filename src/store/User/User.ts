import  {VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { auth, storage } from 'firebase';
import { ResponseError } from '@/Core/Interfaces/Global';

const localUser = localStorage.getItem('user');

@Module
export default class UserModule extends VuexModule {
    currentUser = localUser !== null ? JSON.parse(localUser): null;
    requestResponse: boolean  = false;


    @Action
    takeCurrentUser(){
        this.context.commit('setCurrentUser', auth().currentUser);
    }

    @Mutation
    setCurrentUser(payload: any){
        const userInfo = payload ? {...payload.providerData[0], uid: payload.uid}: null;
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.currentUser = userInfo;
    }

    @Action({rawError: true})
    updateName(name: string){
        auth().currentUser!.updateProfile({
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
        this.context.dispatch('reauthenticate', password)
            .then(
            ()=>{
                auth().currentUser!.updateEmail(email)
                    .then(()=> {
                        this.context.commit('changeRequestResponse', true);
                        this.context.dispatch('takeCurrentUser');
                        this.context.commit('addSnackBarMessage', {
                            message: 'Email success changed',
                            color: 'success'
                        });
                    })
                    .catch((err: ResponseError)=> {
                        this.context.commit('changeRequestResponse', false);
                        this.context.commit('addSnackBarMessage', {
                            message: err.message,
                            color: 'error'
                        });
                    });
            })
            .catch((err: ResponseError)=> {
                this.context.commit('changeRequestResponse', false);
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            });
    }

    @Action({rawError: true})
    reauthenticate(currentPassword: string){
        const user = auth().currentUser;
        const cred = auth.EmailAuthProvider.credential(
            this.currentUser.email, currentPassword);
        return user!.reauthenticateWithCredential(cred);
    };

    @Action
    updateProfilePhoto(photo: string){
        auth().currentUser!.updateProfile({
            displayName: this.currentUser.displayName,
            photoURL: photo
        })
            .then(()=> {
                this.context.dispatch('takeCurrentUser');
                this.context.commit('addSnackBarMessage', {
                    message: 'Photo success changed',
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

    @Mutation
    changeRequestResponse(status: boolean){
        this.requestResponse = status;
    }

    get userData(){
        return this.currentUser;
    }

    get getRequestResponse(){
        return this.requestResponse;
    }




}
