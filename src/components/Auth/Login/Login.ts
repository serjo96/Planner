import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Action, Getter, Mutation } from 'vuex-class';
import { ResponseError } from "@/store/Auth/interfaces/singUp";


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
    @Action loginAction: any;
    @Mutation clearErrorData: any;
    @Getter AuthError!: ResponseError;

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
