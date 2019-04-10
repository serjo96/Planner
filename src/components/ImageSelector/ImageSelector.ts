import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';
import PreLoader from "@/components/Preloader/PreLoader.vue";



@Component({
    components: {PreLoader}
})
export default class ImageSelector extends Vue {
    file: any = {};


    @Getter('userData') User: any;
    @Getter getUploadStatus!: boolean;
    @Getter getStartUploading!: boolean;
    @Action uploadImage: any;
    @Action startUploading: any;
    @Prop(Boolean) value!: boolean;

    get dialogModal(){
        return this.value;
    }

    set dialogModal(dialog: boolean){
        this.$emit('input', dialog)
    }


    uploadFile(){
        const reader = new FileReader();
        const input = <HTMLInputElement> this.$refs.uploaderInput;
        this.file = input!.files;
        this.uploadImage(this.file[0]);
        // reader.onload = () => {
        //         const img = new Image();
        //         img.onload = ()=> {
        //             this.drawCanvasImage(img)
        //         };
        //         img.src = URL.createObjectURL(this.file[0]);
        //     };
        // reader.readAsDataURL(this.file[0]);

    }

    drawCanvasImage(img: HTMLImageElement) {
        const canvas =  <HTMLCanvasElement> this.$refs.canvasImage;


        let ctx = canvas.getContext('2d');
        ctx!.drawImage(img,0,0);
    }


    dropFile(event: DragEvent){
        event.preventDefault();
        this.uploadImage(event.dataTransfer!.files[0]);
    }

    dropZoneDragOver(event: DragEvent){
        event.preventDefault();
        const target = event.target as HTMLElement;
        target.classList().add('--is-hover')
    }

    dropZoneDragLeave(event: DragEvent){
        event.preventDefault();
        const target = event.target as HTMLElement;
        target.classList().remove('--is-hover')
    }
}
