import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';



@Component({
})
export default class InviteDialog extends Vue {
    inviteLink: boolean = false;
    inviteURL: string = '';
    iviteEmail: string = '';


    @Action createInviteUser: any;

    sendInvite(){
        this.createInviteUser(this.iviteEmail)
    }


    onClickCreateLink(){
        this.inviteLink = !this.inviteLink;
    }

    selectInviteInput(){
        const input = <any> this.$refs.inviteInput;
        this.inviteURL = document.URL;
        setTimeout(()=> input.$refs.input.select(),1)

    }

    onClickCopyLink(){
        document.execCommand('copy');
    }

}
