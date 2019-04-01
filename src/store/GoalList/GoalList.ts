import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import GoalsInterface from "@/Core/Interfaces/Goals";
import Router from "@/Core/router/router";



@Module
export default class GoalList extends VuexModule {
    goals: [GoalsInterface]|[] = [];
    isFetching: boolean = false;

    @Action
    subscribeGoalList(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        this.context.commit('changeRequestStatus', false);
        firebase.firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .onSnapshot((doc)=> {
                let data = doc.docs.map(doc=> {
                    return {...doc.data(), id: doc.id}
                });
                this.context.commit('setGoalsData', data);
                this.context.commit('changeRequestStatus', true);
            },
                err=>  {
                console.error(err);
            });
    }

    @Action
    unsubscribeFromGoals(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        firebase.firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .onSnapshot(():void =>{})
    }

    @Mutation
    setGoalsData(payload: [GoalsInterface]){
        this.goals = payload;
    }

    @Mutation
    changeRequestStatus(status: boolean){
        this.isFetching = status;
    }

    @Action
    deleteGoalFromList(id: string){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        // this.context.commit('changeRequestStatus', false);
        firebase.firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .doc(id)
            .delete()
            .then(()=> {
                this.context.commit('addSnackBarMessage', {
                    message: 'Goal success delete',
                    color: 'success'
                });
            })
    }

    get goalsData(){
        return this.goals;
    }

    get requestStatus(){
        return this.isFetching;
    }

}
