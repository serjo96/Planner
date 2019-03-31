import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class';



@Component({

})
export default class SignUp extends Vue {
    valid: boolean = true;
    emailRules = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];
    passwordRules = {
        required: (value: string ) => !!value || 'Required.',
        min: (v: string ) => v.length >= 6 || 'Min 6 characters',
    };
    showPassword: boolean = false;
    email: string = '';
    password: string = '';

    @Prop(Function) changeComponent!: Function;
    @Action('singUpAction') private singUp: any;
    @Mutation clearErrorData: any;

    async onSubmit(){
        if ((this.$refs.form as any).validate()) {
            this.singUp({email: this.email, password: this.password});
            // const auth = await this.$auth.login(this.email, this.password)
        }
    }

    progressText(): number {
        const password = this.password;
        let prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/]
            .reduce((memo, test) => memo + Number(test.test(password)), 0);

        if(prog > 2 && password.length >= 6){
            prog++;
        }

        let progress: number = 0;
        switch (prog) {
            case 0:
            case 1:
                progress = 0;
                break;
            case 2:
                progress = 1;
                break;
            case 3:
                progress = 2;
                break;
            case 4:
                progress = 3;
                break;
            case 5:
                progress = 4;
                break;
        }

        return progress;
    }

    get passwordStatus(){
        const passwordStatus: { [k: string]: string  }  = {
            0: 'Very weak',
            1: 'Weak',
            2: 'Average',
            3: 'Strong',
            4: 'Very strong',
        };

        return passwordStatus[this.progressText()]
    }

    progress (): number {
        return Math.min(100, this.progressText() * 25)
    }

    color (): string {
        return ['darken-4 red', 'error', 'darken-4 lime', 'warning', 'success'][this.progressText()]
    }

    beforeDestroy(){
        this.clearErrorData();
    }


}
