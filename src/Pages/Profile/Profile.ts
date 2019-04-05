import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';


@Component({

})
export default class Profile extends Vue {
    gradient: string = 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)';

    @Action updateProfile: any;
    @Getter('userData') User: any;


}
