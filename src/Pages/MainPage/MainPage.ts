import Vue from 'vue';
import Component from 'vue-class-component';
import GoalForm from "@/components/GoalForm/GoalForm.vue";
import TheAside from "@/components/Aside/TheAside.vue";



@Component({
    components: {TheAside, GoalForm}
})
export default class MainPage extends Vue {

}
