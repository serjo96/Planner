import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { firestore } from 'firebase';
import GoalsInterface from "@/Core/Interfaces/Goals";



@Module
export default class GoalList extends VuexModule {
    goals: [GoalsInterface]|[] = [];
    isFetching: boolean = false;

    @Action
    subscribeGoalList(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        this.context.commit('changeRequestStatus', false);
        firestore().collection('goals')
            .doc(userId)
            .collection('userGoals')
            .onSnapshot((doc)=> {
                let data = doc.docs.map(doc=> {
                    return {...doc.data(), id: doc.id}
                });
                this.context.commit('setGoalsData', data);
                this.context.commit('changeRequestStatus', true);
            },
                (err): void=>  {
                    this.context.commit('addSnackBarMessage', {
                        message: err.message,
                        color: 'error'
                    });
            });
    }

    @Action
    unsubscribeFromGoals(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        firestore().collection('goals')
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
        firestore().collection('goals')
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
            .catch(err=>{
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
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
