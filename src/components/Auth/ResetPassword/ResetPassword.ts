import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import { Action, Mutation, Getter } from 'vuex-class';
import { ResponseError } from '@/Core/Interfaces/Global';



@Component({
    data: ()=> ({

        emailRules: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
        ],

    })
})
export default class ResetPassword extends Vue {
    email: string = '';
    valid: boolean = true;

    @Action resetPassword: any;
    @Mutation clearErrorData: any;
    @Mutation clearPasswordMessage: any;
    @Getter AuthError!: ResponseError;
    @Getter restPasswordMessage!: string;
    @Prop(Function) changeComponent!: Function;

    get formValidate(){
        return (this.$refs.form as Vue & { validate: () => boolean }).validate();
    }

    onInput(val: string){
        this.email = val;
        if(this.AuthError.message){
            this.clearErrorData();
        }
    }

    onSubmit(){
        if(this.formValidate){
            this.resetPassword(this.email);
        }
    }

    beforeDestroy(){
        this.clearPasswordMessage();
        this.clearErrorData();
    }

}
