import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';
import PreLoader from "@/components/Preloader/PreLoader.vue";




@Component({
    components: {PreLoader}
})
export default class ImageSelector extends Vue {
    file: any = {};
    slider: number = 0;


    @Getter('userData') User: any;
    @Getter getUploadStatus!: boolean;
    @Getter getStartUploading!: boolean;

    @Action uploadOriginalImage: any;
    @Action uploadImgForEdit: any;
    @Action startUploading: any;
    @Prop(Boolean) value!: boolean;


    get dialogModal(){
        return this.value;
    }

    set dialogModal(dialog: boolean){
        this.$emit('input', dialog)
    }


    uploadFile(){
        const input = <HTMLInputElement> this.$refs.uploaderInput;
        let reader = new FileReader();
        this.file = input!.files;
        this.uploadOriginalImage(this.file[0]);


        reader.readAsDataURL(this.file[0]);
        reader.onloadend = () => {
            let img = <HTMLImageElement> new Image();
            img.src = reader.result as string;
            this.uploadImgForEdit(img)
        }
    }


    dropFile(event: DragEvent){
        event.preventDefault();
        const target = event.target ? <HTMLElement>event.target : null;
        target!.classList.remove('image-selector__upload-drop-zone-label--is-hover');
        this.uploadOriginalImage(event.dataTransfer!.files[0]);
    }

    dropZoneDragOver(event: DragEvent){
        const target = event.target ? <HTMLElement>event.target : null;
        target!.classList.add('image-selector__upload-drop-zone-label--is-hover')
    }

    dropZoneDragLeave(event: DragEvent){
        const target = event.target ? <HTMLElement>event.target : null;
        target!.classList.remove('image-selector__upload-drop-zone-label--is-hover')
    }
}
