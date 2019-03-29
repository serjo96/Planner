import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import GoalsInterface from "@/Core/Interfaces/Goals";



@Module
export default class GoalList extends VuexModule {
    goals: [GoalsInterface]|[] = [];
    isFetching: boolean = false;

    @Action
    loadGoalList(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        this.context.commit('changeRequestStatus', false);
        firebase
            .firestore()
            .collection('goals')
            .doc(userId)
            .collection('userGoals')
            .get()
            .then((querySnapshot) => {
                this.context.commit('setGoalsData', querySnapshot.docs.map(doc=> doc.data()));
                this.context.commit('changeRequestStatus', true);
            })
            .catch(err=> console.log(err))
    }

    @Mutation
    setGoalsData(payload: [GoalsInterface]){
        this.goals = payload;
    }

    @Mutation
    changeRequestStatus(status: boolean){
        this.isFetching = status;
    }

    get goalsData(){
        return this.goals;
    }

    get requestStatus(){
        return this.isFetching;
    }

}
