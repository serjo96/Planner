import Vue from 'vue'
import Component from 'vue-class-component'
import { Mutation, Getter } from 'vuex-class';
import { Watch } from 'vue-property-decorator'
import {snackBarInterface} from "@/store/Global/Interfaces/Interface";


@Component({

})
export default class SnackBar extends Vue {
    show: boolean = false;
    timeout: number = 4000;

    @Mutation clearSnackBar: any;
    @Getter snackBar!: snackBarInterface;
    @Getter loadingStatus: any;

    @Watch('show')
    onClearSnackBar(val: boolean){
       if(!val){
        this.clearSnackBar();
       }
    };

    @Watch('snackBar', {deep: true})
    showSnackBar(val: snackBarInterface){
        if(val.message){
            this.show = true;
        }
    }

}
