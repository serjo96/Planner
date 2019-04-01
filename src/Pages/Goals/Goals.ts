import Vue from 'vue'
import {  Action, Getter } from 'vuex-class';
import { Watch, Component } from 'vue-property-decorator';
import GoalsInterface from "@/Core/Interfaces/Goals";
import PreLoader from "@/components/Preloader/PreLoader.vue";


@Component({
    components: {PreLoader}
})
export default class Goals extends Vue {
    @Action subscribeGoalList: any;
    @Action unsubscribeFromGoals: any;
    @Action deleteGoalFromList: any;
    @Getter goalsData!: [GoalsInterface];
    @Getter requestStatus!: boolean;

    created () {
        this.subscribeGoalList();
    }

    beforeDestroy() {
        this.unsubscribeFromGoals();
    }


}
