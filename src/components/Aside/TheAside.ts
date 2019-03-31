import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import * as firebase from 'firebase/app';
import { Getter, Action, Mutation } from 'vuex-class';


@Component({

})
export default class TheAside extends Vue {
    @Getter('userData') User: any;
    @Action logOut: any;
    @Mutation('dialogVisibility') dialogView: any;

    get userEmail(){
        if(this.User){
            return this.User.email;
        }
        return null;
    }


}
