import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action, Getter } from 'vuex-class';

import Aside from '@/components/Aside/Aside.vue';
import GoalForm from "@/components/GoalForm/GoalForm.vue";



@Component({
    components: {Aside, GoalForm}
})
export default class MainComponent extends Vue {
    // @Action
    // public loadGoalsList!: any ;
    //
    // mounted () {
    //     this.loadGoalsList();
    // }


}
