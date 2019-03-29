import Vue from 'vue'
import Component from 'vue-class-component'
import {  Action, Getter } from 'vuex-class';
import { Watch } from 'vue-property-decorator';
import GoalsInterface from "@/Core/Interfaces/Goals";


@Component({
    computed: {

    }
})
export default class Goals extends Vue {
    @Action loadGoalList: any;
    @Getter goalsData!: [GoalsInterface];

    created () {
        this.loadGoalList();
    }


}
