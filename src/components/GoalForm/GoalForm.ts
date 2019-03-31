import Vue from 'vue'
import { Watch, Component } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class';

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
    dateFormatted: string = '';
    menu: boolean = false;
    valid: boolean = false;

    nameRules: any = [
        (v: string) => !!v || 'Name is required',
    ];

    @Mutation dialogVisibility: any;
    @Mutation addSnackBarMessage: any;
    @Action addGoal: any;

    @Watch('date')
    onChangeDate(){
        this.dateFormatted = this.formatDate(this.date)
    }

    formatDate (date: string) {
        if (!date) return '';

        const [year, month, day] = date.split('-');
        return `${month}.${day}.${year}`
    }

    parseDate (date: any) {
        if (!date) return '';

        const [month, day, year] = date.split('.');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }


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
