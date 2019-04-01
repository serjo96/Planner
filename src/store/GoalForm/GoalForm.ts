import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { goalPayload } from "@/store/GoalForm/interfaces";
import {ResponseError} from "@/Core/Interfaces/Global";



@Module
export default class GoalForm extends VuexModule {
    dialog: boolean = false;

    get dialogView(){
        return this.dialog;
    }

    @Mutation
    dialogVisibility(payload: boolean){
        this.dialog = payload;
    }

    @Action
    addGoal(payload: goalPayload){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        const payloadData = {...payload, status: false};
        firebase
            .firestore()
            .collection('goals')
            .doc(userId)
            .collection('userGoals')
            .doc()
            .set(payloadData)
            .then((): void=>{
                this.context.dispatch('addSnackBarMessage', {
                    message: 'Goal success added',
                    color: 'success'
                })
            })
            .catch((err: ResponseError): void=> {
                this.context.dispatch('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                })
            })
    }

}
