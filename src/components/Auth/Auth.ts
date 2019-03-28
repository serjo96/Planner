import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class';
import Login from "./Login/login.vue";
import SignUp from "./SignUp/SignUp.vue";
import ResetPassword from "@/components/Auth/ResetPassword/ResetPassword.vue";


@Component({
    components: {Login, SignUp, ResetPassword},
})
export default class Auth extends Vue {
    currentComponent: string = 'Login';

    @Getter('userData') User: any;

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
