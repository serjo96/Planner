import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class';
import { ResponseError } from '@/Core/Interfaces/Global';



@Component({
})
export default class Login extends Vue {
    valid: boolean = true;
    emailRules: any = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];
    passwordRules = {
        required: (value: string ) => !!value || 'Required.',
    };
    showPassword: boolean = false;
    email: string = '';
    password: string = '';

    @Prop(Function) changeComponent!: Function;
    @Prop() readonly AuthError!: ResponseError;
    @Action loginAction: any;
    @Mutation clearErrorData: any;

    get formValidate(){
        return (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }


    login(){
        if (this.formValidate) {
            this.loginAction({email: this.email, password: this.password});
        }
    }

    beforeDestroy(){
        this.clearErrorData();
    }


}
