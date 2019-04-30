import  {VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { storage } from 'firebase';
import { ResponseError } from '@/Core/Interfaces/Global';



@Module
export default class Storage extends VuexModule {
    uploadImageStatus: boolean = false;
    startUploading: boolean = false;
    originalImgURL: string = '';


    @Action
    uploadImgForEdit(img: HTMLImageElement){
        this.context.commit('setOriginalImgURL', img.src)
    }

    @Action
    uploadOriginalImage(img: Blob) {
        this.context.commit('changeUploadStatus', false);
        const userId = this.context.rootState.UserModule.currentUser.uid;


        const uploadTask =  storage()
            .ref()
            .child(`photos/${userId}/originalImage`)
            .put(img);

        uploadTask.on(storage.TaskEvent.STATE_CHANGED,
            (snapshot): void=> {
                const snapshotRef = snapshot as firebase.storage.UploadTaskSnapshot;
                // const bytesTransferred = (snapshotRef).bytesTransferred;
                // const totalBytes = (snapshotRef).totalBytes;
                // let progress = (bytesTransferred / totalBytes) * 100;
                //TODO: remove if not be needed visual upload progress

                this.context.commit('startUploadStatus', true);


            }, (err): void=> {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            },
            (): void=> {

                //taking uploaded img url
                // this.context.dispatch('downloadOriginalURL');
                this.context.commit('changeUploadStatus', true);
                this.context.commit('startUploadStatus', false);
                this.context.commit('addSnackBarMessage', {
                    message: 'Image success uploaded',
                    color: 'success'
                });
            }

        )

    }

    @Mutation
    changeUploadStatus(status: boolean){
        this.uploadImageStatus = status;
    }

    @Mutation
    startUploadStatus(status: boolean){
        this.startUploading = status;
    }

    get getUploadStatus(){
        return this.uploadImageStatus;
    }

    get getStartUploading(){
        return this.startUploading;
    }

    @Action
    downloadOriginalURL(){
        const userId = this.context.rootState.UserModule.currentUser.uid;
        storage()
            .ref(`photos/${userId}/originalImage`)
            .getDownloadURL()
            .then((downloadURL) => {
                //TODO: Remove this action call, after adding photo cropping
                // this.context.dispatch('updateProfilePhoto', downloadURL);
                this.context.commit('setOriginalImgURL', downloadURL);
            });
    }

    @Mutation
    setOriginalImgURL(url: string){
        this.originalImgURL = url;
    }

    get getOriginalImgURL (){
        return this.originalImgURL;
    }


}
