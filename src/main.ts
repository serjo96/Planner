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
import FirebaseAuthPlugin from "@/Core/services/FirebaseAuthPlugin";

Vue.config.devtools = true;
Vue.config.productionTip = false;
firebase.initializeApp(config);

// Vue.use(FirebaseAuthPlugin);
Vue.use(Vuetify);
Vue.use(Vuex);


firebase.firestore().enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
    } else {
        store.dispatch('logOut')
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Route,
    store,
    components: { App },
    template: '<App/>',
});
