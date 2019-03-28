import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase';



@Module
export default class GoalList extends VuexModule {

    @Action
    loadGoalList(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        firebase
            .firestore()
            .collection('users')
            .doc(userId)
            .get()

            .then((querySnapshot: any) => {
               console.log(querySnapshot.data())
            })
            .catch(err=> console.log(err))
    }

}
