import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase';
import {  Action, Getter } from 'vuex-class';

import 'vuetify/dist/vuetify.min.css';
import store from "@/store";



@Component({
})
export default class App extends Vue {

    @Action onAuthChange: any;
    @Action onEnablePWA: any;
    @Getter pwaStatus!: boolean;

    created(){
        this.onAuthChange();
        if(this.pwaStatus){
            this.onEnablePWA();
        }
    }

}
