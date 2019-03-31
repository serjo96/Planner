import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';


@Component({

})
export default class Goal extends Vue {
    gradient: string = 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)';

    @Action getGoal: any;
    @Action deleteGoal: any;
    @Getter readonly getGoalData: any;
    @Getter readonly loadingStatus: any;

    get getGoadId(){
        return this.$route.params.id;
    }

    created(){
        this.getGoal(this.getGoadId)
    }

    beforeDestroy(){

    }

    onDeleteGoal(){
        this.deleteGoal(this.getGoadId);
    }


}
