import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator';


@Component({

})
export default class PreLoader extends Vue {
    @Prop(Boolean) readonly loading!: boolean;

    mounted(){
        this.$parent.$el.classList.add('pre-loader-parent');
    }

    beforeDestroy(){
        this.$parent.$el.classList.remove('pre-loader-parent');
    }

}
