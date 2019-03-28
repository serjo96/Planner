import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, Getter, Mutation } from 'vuex-class';


@Component({

})
export default class StepList extends Vue {
    @Action loadGoalList: any;

    mounted(){
        this.loadGoalList();
    }

}
