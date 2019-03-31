import Vue from 'vue';
import Component from 'vue-class-component';
import GoalForm from "@/components/GoalForm/GoalForm.vue";
import TheAside from "@/components/Aside/TheAside.vue";
import SnackBar from "@/components/Snackbar/SnackBar.vue";



@Component({
    components: {TheAside, GoalForm, SnackBar}
})
export default class MainPage extends Vue {

}
