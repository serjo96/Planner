import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import { Action, Getter, Mutation } from 'vuex-class';
import { stepPayload } from "@/store/Goal/interfaces/goalInterfaces";
import UIDatePicker from "@/components/UI/DataPicker/UIDatePicker.vue";
import {normalizeDateBySeconds} from "@/Helpers/DateHelper";


@Component({
    components: { UIDatePicker }
})
export default class StepList extends Vue {
    stepName: string = '';
    description: string = '';
    date: string = '';
    valid: boolean = false;

    nameRules: any = [
        (v: string) => !!v || 'Name is required',
    ];

    @Action addGoalStep: any;
    @Action changeStepList: any;
    @Prop(String) GoalId!: string;
    @Prop() Steps!: stepPayload;


    normalizeDate(seconds: number){
        return normalizeDateBySeconds(seconds);
    }

    stepStatus(status: boolean){
        return {
            icon: status ? 'done' : '',
            color: status ? 'success' : 'red lighten-2'
        };
    }

    onChangeStepStatus(stepArr: [stepPayload], indx: number){
        const steps = stepArr;
        steps[indx].done = !steps[indx].done;
        this.changeStepList({
            id: this.GoalId,
            stepsArray: steps,
        })
    }

    deleteStep(stepArr: [stepPayload], indx: number){
        const steps = stepArr;
        steps.splice(indx, 1);

        this.changeStepList({
            id: this.GoalId,
            stepsArray: steps,
        })
    }


    get formValidate(){
        return (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }

    onSubmit(){
        const stepData = {
            name: this.stepName,
            description: this.description,
            date: this.date,
            done: false
        };

        if(this.formValidate){
            this.addGoalStep({
                id: this.GoalId,
                stepData
            });
        }
    }

}
