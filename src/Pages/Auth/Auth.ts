import Vue from 'vue';
import { Watch, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import Login from "@/components/Auth/Login/Login.vue";
import SignUp from "@/components/Auth/SignUp/SignUp.vue";
import ResetPassword from "@/components/Auth/ResetPassword/ResetPassword.vue";
import { ResponseError } from "@/Core/Interfaces/Global";


@Component({
    components: {Login, SignUp, ResetPassword},
})
export default class Auth extends Vue {
    currentComponent: string = 'Login';

    @Getter('userData') readonly User: any;
    @Getter readonly AuthError!: ResponseError;

    @Watch('User', {deep: true})
    onUserChange(auth: any) {
        if (auth) {
            this.$router.replace(this.nextRoute)
        }
    }

    get getAuthComponent(){
        return this.currentComponent;
    }


    get nextRoute ():string {
        return `${this.$route.query.redirect && '/'}` || '/'
    }


    changeComponent(component: string){
        this.currentComponent = component;
    }

}
