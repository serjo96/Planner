import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Action, Getter, Mutation } from 'vuex-class';

@Component({
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
    menu: boolean = false;
    valid: boolean = false;

    nameRules: any = [
        (v: string) => !!v || 'Name is required',
    ];

    @Mutation dialogVisibility: any;
    @Action addGoal: any;

    get formValidate(){
        return (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }

    onSubmit(){
        if (this.formValidate) {
            this.addGoal({name: this.name, description: this.description, date: this.date});
            this.name = '';
            this.description = '';
            this.date = '';
            this.dialogVisibility(false);
        }
    }
}
