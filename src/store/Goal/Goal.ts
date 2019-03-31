import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';
import GoalsInterface from "@/Core/Interfaces/Goals";
import Router from "@/Core/router/router";


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
                    if(doc.data()){
                        this.context.commit('setGoalData', doc.data())
                    }
                },
                err=>  {
                    console.error(err);
                });
    }

    @Action
    deleteGoal(id: string){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        this.context.commit('changeLoadingStatus', false);
        firebase.firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .doc(id)
            .delete()
            .then(()=>{
                this.context.commit('addSnackBarMessage', {
                    message: 'Goal success delete',
                    color: 'success'
                });
                Router.push('/');
            })
    }

    @Mutation
    changeLoadingStatus(status: boolean){
        this.loading = status;
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
