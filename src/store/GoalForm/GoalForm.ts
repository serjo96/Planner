import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { goalPayload } from "@/store/GoalForm/interfaces";



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
            .catch(er=> console.log(er, 'err'))
    }

}
