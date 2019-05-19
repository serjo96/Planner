import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import * as firebase from 'firebase';
import Axios from "axios";
import {ResponseError} from "@/Core/Interfaces/Global";
import {config} from "@/Core/api_config/apiConfig";


@Module
export default class InviteUser extends VuexModule {
    shortLink: {shortLink: string, previewLink: string}|string = {
        shortLink: '',
        previewLink: ''
    };

    @Action({rawError: true})
    createInviteUser({email, goalID} :{email: string, goalID: string}) {
        let inviteFunction = firebase.functions().httpsCallable('createInviteUser');
        const userId = this.context.rootState.UserModule.currentUser.uid;


        inviteFunction({email, goalID, userId})
            .then((result) => {
                console.log(result);
            })
            .catch((err: ResponseError) => {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            });


    }

    @Action({rawError: true})
    createShortInviteLink(link: string) {
        Axios.post(`https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${config.apiKey}`, {
            dynamicLinkInfo:{
                domainUriPrefix: "https://plannerlist.page.link",
                link: link
            },
            "suffix": {
                "option": "SHORT"
            }
        })
            .then(res=> this.context.commit('setShortUrl', res.data))
            .catch((err: ResponseError) => {
                this.context.commit('addSnackBarMessage', {
                    message: err.message,
                    color: 'error'
                });
            });
    }

    @Mutation
    setShortUrl(link: string){
        this.shortLink = link;
    }

}
