import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, Getter } from 'vuex-class';


@Component({

})
export default class Goal extends Vue {

    @Action
    getGoal: any;

    @Getter getGoalData: any;
    @Getter loadingStatus: any;

    created(){
        this.getGoal(this.$route.params.id)
    }

    beforeDestroy(){

    }

    getGoadId(){

    }

}
