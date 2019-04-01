import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class';
import UIDatePicker from "@/components/UI/DataPicker/UIDatePicker.vue";

@Component({
    components: { UIDatePicker },
    computed: {
        modal: {
            get () {
                return this.$store.state.GoalForm.dialog
            },
            set (value) {
                this.$store.commit('dialogVisibility', value)
            }
        }
    }
})
export default class GoalForm extends Vue {
    name: string = '';
    description: string = '';
    date: string = '';
    valid: boolean = false;


    nameRules: any = [
        (v: string) => !!v || 'Name is required',
    ];

    @Mutation dialogVisibility: any;
    @Mutation addSnackBarMessage: any;
    @Action addGoal: any;



    get formValidate(){
        return (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }

    onSubmit(){
        if (this.formValidate) {
            this.addGoal({
                name: this.name,
                description: this.description,
                date: this.date
            });
            this.name = '';
            this.description = '';
            this.date = '';
            this.dialogVisibility(false);
        }
    }
}
