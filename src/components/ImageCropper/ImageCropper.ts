import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';
import PreLoader from "@/components/Preloader/PreLoader.vue";
import {imagePosition} from '@/components/ImageCropper/ImageCropperInterface';



@Component({
    components: {PreLoader}
})
export default class ImageCropper extends Vue {
    slider: number = 100;
    dragging: boolean = false;
    img!: HTMLImageElement;
    imgEditor = {
        offsetX : -108,
        offsetY : 8,
        dragStartX: 0,
        dragStartY: 0
    };


    @Prop(String) image!: string;


    @Watch('slider')
    zoom(){
       this.renderOffset( null, null)
    }


    created(){
        const img = new Image();
        img.onload = ()=> {
            this.img = img;
            this.renderOffset( null, null)
        };
        img.src = this.image;
    }


    paintBG(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }



    getDragOffset(ev: MouseEvent){
        let dragCurrX = ev.clientX;
        let dragCurrY = ev.clientY;

        return {
            x : this.imgEditor.offsetX + (dragCurrX - this.imgEditor.dragStartX),
            y : this.imgEditor.offsetY + (dragCurrY - this.imgEditor.dragStartY)
        };
    }

    moveImage(event: MouseEvent){
        const canvas = <HTMLCanvasElement> this.$refs.canvasImage;
        let imgX = canvas.width * 0.04;
        let imgY = canvas.height * 0.07;

        if (this.dragging) {
            let pos = this.getDragOffset(event);
            if( pos.x != imgX || pos.y != imgY ){
                this.renderOffset( pos.x, pos.y);
            }
        }
    }

    startDrag(event: MouseEvent){
        this.imgEditor.dragStartX = event.clientX;
        this.imgEditor.dragStartY = event.clientY;
        this.dragging = true;
    }

    handleDragImageEnd(ev: MouseEvent){
        let pos = this.getDragOffset(ev);
        this.imgEditor.offsetX = pos.x;
        this.imgEditor.offsetY = pos.y;
        this.dragging = false;
    }


    renderOffset(offsetX: number|null, offsetY: number|null){
        offsetX = offsetX || this.imgEditor.offsetX;
        offsetY = offsetY || this.imgEditor.offsetY;

        const canvas = <HTMLCanvasElement> this.$refs.canvasImage;
        let ctx = canvas.getContext('2d');
        canvas.width = 744;
        canvas.height = 451;
        let viewW = ctx!.canvas.width;
        let viewH = ctx!.canvas.height;
        let srcWidth = viewW / (this.slider/100);
        let srcHeight = viewH / (this.slider/100);
        let viewCenterX = +( (-offsetX + viewW/2 ) - (srcWidth/2) ).toFixed(2);
        let viewCenterY = +( (-offsetY + viewH/2 ) - (srcHeight/2) ).toFixed(2);


        this.paintBG(ctx!);
        ctx!.drawImage(this.img, viewCenterX, viewCenterY, srcWidth, srcHeight, 0,0, viewW, viewH);

    }

}
