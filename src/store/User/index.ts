import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import * as firebase from 'firebase';

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
        if(!localStorage['user']){
            localStorage.setItem('user', JSON.stringify(payload));
            this.currentUser = payload;
        }
    }

    get userData(){
        return this.currentUser;
    }

}
