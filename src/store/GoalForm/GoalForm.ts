import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { goalPayload } from "@/store/GoalForm/interfaces";
import UserModule from "@/store/User";





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
        firebase
            .firestore()
            .collection('goals')
            .doc(userId)
            .collection('userGoals')
            .doc()
            .set(payload)
            .then(res=> console.log(res, 'added'))
            .catch(er=> console.log(er, 'err'))
    }

}
