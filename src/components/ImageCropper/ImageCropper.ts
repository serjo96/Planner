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
    x: any;
    y: any;
    imageUrl: string = '';


    @Prop(String) image!: string;


    @Watch('slider')
    zoom(){
       this.renderOffset()
    }


    created(){
        const img = new Image();
        img.onload = ()=> {
            this.img = img;
            this.initImage(img);

            // this.renderOffset()
        };
        img.src = this.image;
    }

    initImage(imgEl: HTMLImageElement){
        let img = <HTMLImageElement> this.$refs.editingImage;
        let containerWidth = 720;
        let containerHeight = 451;
        this.imageUrl = this.image;

        console.log(img.width)
        img.style.transformOrigin = imgEl.width/2+'px' + ' ' + imgEl.height/2 +'px';
        img.style.left = containerWidth/2+'px';
        img.style.top = containerWidth/2+'px';

        img.width = containerWidth / (this.slider/100);
        img.height = containerHeight / (this.slider/100);
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


    paintBG(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    drawCircle(ctx: CanvasRenderingContext2D){
        let middleCanvasX = ctx!.canvas.width/2;
        let middleCanvasY = ctx!.canvas.height/2;

        ctx!.beginPath();
        ctx!.arc(middleCanvasX, middleCanvasY, 115, 0, Math.PI * 2, true);
    }


    renderOffset(offsetX?: number, offsetY?: number){
        let X = offsetX || this.imgEditor.offsetX;
        let Y = offsetY || this.imgEditor.offsetY;

        this.x = X;
        this.y = Y;

        const canvas = <HTMLCanvasElement> this.$refs.canvasImage;
        let ctx = canvas.getContext('2d');
        canvas.width = 744;
        canvas.height = 451;
        let viewW = ctx!.canvas.width;
        let viewH = ctx!.canvas.height;
        let srcWidth = viewW / (this.slider/100);
        let srcHeight = viewH / (this.slider/100);
        let viewCenterX = +( (-X + viewW/2 ) - (srcWidth/2) ).toFixed(2);
        let viewCenterY = +( (-Y + viewH/2 ) - (srcHeight/2) ).toFixed(2);


        ctx!.drawImage(this.img, viewCenterX, viewCenterY, srcWidth, srcHeight, 0,0, viewW, viewH);
        ctx!.globalCompositeOperation = 'destination-in';
        this.drawCircle(ctx!);
        this.paintBG(ctx!);
        ctx!.clip();
        ctx!.globalCompositeOperation = 'destination-atop';
        ctx!.drawImage(this.img, viewCenterX, viewCenterY, srcWidth, srcHeight, 0,0, viewW, viewH);
    }


    cropImage(){
        const canvas = <HTMLCanvasElement> this.$refs.canvasImage;
        const canvasCrop = <HTMLCanvasElement> this.$refs.canvasCrop;
        let ctx = canvas.getContext('2d');
        let ctxCrop = canvasCrop.getContext('2d');
        let viewW = ctx!.canvas.width;
        let viewH = ctx!.canvas.height;
        let srcWidth = viewW / (this.slider/100);
        let srcHeight = viewH / (this.slider/100);
        let middleCanvasX = ctx!.canvas.width/2;
        let middleCanvasY = ctx!.canvas.height/2;

        let viewCenterX = +( (-this.x + viewW/2 ) - (srcWidth/2) ).toFixed(2);
        let viewCenterY = +( (-this.y + viewH/2 ) - (srcHeight/2) ).toFixed(2);
        let left =  viewW - middleCanvasX;
        let top =  viewH - middleCanvasY;



        // ctx!.clearRect(0, 0, canvas.width, canvas.height);

        this.drawCircle(ctxCrop!);
        ctxCrop!.clip();
        ctxCrop!.drawImage(this.img, 500, 500, srcWidth, srcHeight, 0,0, viewW, viewH);
        let img = new Image();
        img.src = canvasCrop.toDataURL();
        this.img = img;
        this.renderOffset();


    }

    resetCanvas(){
        const canvas = <HTMLCanvasElement> this.$refs.canvasImage;
        let ctx = canvas.getContext('2d');
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        // this.img = this.croppedImg;
        this.renderOffset();
    }

}
