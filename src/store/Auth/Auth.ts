import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { SingUpActionPayload, ResponseError, SingUpMutationPayload} from "./interfaces/singUp";
import Router from "@/Core/router/router";





@Module
export default class Auth extends VuexModule {
    singUpData: any;
    authError: ResponseError = {
        code: '',
        message: ''
    };
    successResetPasswordMessage: string = '';

    get AuthError(){
        return this.authError;
    }

    get restPasswordMessage(){
        return this.successResetPasswordMessage;
    }


    @Action({rawError: true})
    singUpAction (payload: SingUpActionPayload) {
       firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
           .then(res=> {
               this.context.commit('setCurrentUser', firebase.auth().currentUser);
               this.context.commit('setSingUpResult', res);
               Router.push('/');
           })
           .catch(error=> {
               this.context.commit('error',  error);
           });
    }

    @Action({rawError: true})
    loginAction(payload: any){
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
            .then(res=>{
                this.context.commit('login', res);
                this.context.commit('setCurrentUser', firebase.auth().currentUser);
                Router.push('/');
            })
            .catch(error=>{
                this.context.commit('error', error);
            });
    }

    @Mutation
    error(error: ResponseError){
        this.authError = error;
    }

    @Mutation
    successResetPassword(){
        this.successResetPasswordMessage = 'A message with instructions for resetting the password has been sent to your email.';
    }

    @Mutation
    setSingUpResult(payload: any) {
        this.singUpData = payload.result;
    }

    @Mutation
    login(payload: any){
        this.singUpData = payload.result;
    }

    @Action
    logOut(){
        firebase.auth().signOut()
            .then(()=> {
                this.context.commit('setCurrentUser', firebase.auth().currentUser);
                localStorage.removeItem('user');
                Router.push('/auth');
            })
            .catch(error=> {
                this.context.commit('setCurrentUser', firebase.auth().currentUser);
            });
    }

    @Action
     resetPassword(email: string){
        const actionCodeSettings = {url: 'http://localhost:8080'};

        firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
            .then(()=> {
                this.context.commit('successResetPassword');
            })
            .catch(error=> {
                this.context.commit('error', error);
            })
    }


    @Mutation
    clearErrorData(){
        this.authError = {
            code: '',
            message: ''
        }
    }

    @Mutation
    clearPasswordMessage(){
        this.successResetPasswordMessage = '';
    }

}
