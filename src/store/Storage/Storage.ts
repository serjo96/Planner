import  {VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { storage } from 'firebase';
import { ResponseError } from '@/Core/Interfaces/Global';



@Module
export default class Storage extends VuexModule {
    uploadImageStatus: boolean = false;
    startUploading: boolean = false;


    @Action
    uploadImage(img: Blob) {
        this.context.commit('changeUploadStatus', false);
        const userId = this.context.rootState.UserModule.currentUser.uid;

        const uploadTask =  storage()
            .ref()
            .child(`photos/${userId}/profilePhoto`)
            .put(img);

        uploadTask.on(storage.TaskEvent.STATE_CHANGED,
            (snapshot): void=> {
                const snapshotRef = snapshot as firebase.storage.UploadTaskSnapshot;
                const bytesTransferred = (snapshotRef).bytesTransferred;
                const totalBytes = (snapshotRef).totalBytes;

                this.context.commit('startUploadStatus', true);
                let progress = (bytesTransferred / totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');


            }, (err): void=> {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            },
            (): void=> {
                //TODO: Remove this action call, after adding photo cropping
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    this.context.dispatch('updateProfilePhoto', downloadURL);
                });
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

}
