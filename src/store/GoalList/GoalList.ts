import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import GoalsInterface from "@/Core/Interfaces/Goals";



@Module
export default class GoalList extends VuexModule {
    goals: [GoalsInterface] = [{name:'', description: '', date:''}];

    @Action
    loadGoalList(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        firebase
            .firestore()
            .collection('goals')
            .doc(userId)
            .collection('userGoals')
            .get()
            .then((querySnapshot) => {

                this.context.commit('setGoalsData', querySnapshot.docs.map(doc=> doc.data()))
            })
            .catch(err=> console.log(err))
    }

    @Mutation
    setGoalsData(payload: [GoalsInterface]){
        this.goals = payload;
    }

    get goalsData(){
        return this.goals;
    }

}
