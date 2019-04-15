import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';
import PreLoader from "@/components/Preloader/PreLoader.vue";
import ImageCropper from '@/components/ImageCropper/ImageCropper.vue';
import ImageSelector from '@/components/ImageSelector/ImageSelector.vue';



@Component({
    components: {ImageSelector, ImageCropper}
})
export default class ProfilePhotoDialog extends Vue {
    file: any = {};
    slider: number = 0;

    @Getter getOriginalImgURL!: string;
    @Prop(Boolean) value!: boolean;


    get dialogModal(){
        return this.value;
    }

    set dialogModal(dialog: boolean){
        this.$emit('input', dialog)
    }

}
