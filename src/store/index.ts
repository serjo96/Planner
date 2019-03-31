import Vue from 'vue';
import Vuex,{ Store } from 'vuex';
import {State} from './state';
import UserModule from "./User";
import Auth from "./Auth/Auth";
import GoalForm from "@/store/GoalForm/GoalForm";
import GoalList from "@/store/GoalList/GoalList";
import Goal from "@/store/Goal/Goal";
import Global from "@/store/Global/Global";

Vue.use(Vuex);

export default new Store<State>({
    modules: {
        GoalForm,
        GoalList,
        Goal,
        Global,
        UserModule,
        Auth,
    }
});
