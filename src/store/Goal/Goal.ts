import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import { goalPayload } from "@/store/GoalForm/interfaces";
import UserModule from "@/store/User";
import GoalsInterface from "@/Core/Interfaces/Goals";


@Module
export default class Goal extends VuexModule {
    goalData: GoalsInterface = {name: '', status: false, description: '', date: ''};
    loading: boolean = false;

    @Action
    getGoal(id: string){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        this.context.commit('changeRequestStatus', false);
        firebase.firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .doc(id)
            .onSnapshot((doc)=> {

               this.context.commit('setGoalData', doc.data())
                },
                err=>  {
                    console.error(err);
                });
    }

    @Mutation
    setGoalData(data: GoalsInterface) {
        this.goalData = data;
        this.loading = true;
    }

    get getGoalData() {
        return this.goalData;
    }

    get loadingStatus(){
        return this.loading;
    }

}
