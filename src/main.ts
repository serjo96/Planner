// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import * as firebase from 'firebase';


import App from './App.vue';
import Route from '@/Core/router/router';
import store from './store/index';
import { config } from "./Core/api_config/database";

Vue.config.devtools = true;
Vue.config.productionTip = false;
firebase.initializeApp(config);

Vue.use(Vuetify);
Vue.use(Vuex);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Route,
    store,
    components: { App },
    template: '<App/>',
});
