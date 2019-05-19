import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import {Action, Getter, State} from 'vuex-class';



@Component({
})
export default class InviteDialog extends Vue {
    inviteLink: boolean = false;
    inviteEmail: string = '';


    @Action createInviteUser: any;
    @Action createShortInviteLink: any;
    @State(state => state.InviteUser.shortLink) shortLink!: string;

    sendInvite(){
        let goalID = this.$route.params.id;
        this.createInviteUser({
            email: this.inviteEmail,
            goalID
        })
    }


    onClickCreateLink(){
        this.inviteLink = !this.inviteLink;
        this.createShortInviteLink(document.URL);
    }

    selectInviteInput(){
        const input = <any> this.$refs.inviteInput;
        setTimeout(()=> input.$refs.input.select(),1)

    }

    onClickCopyLink(){
        document.execCommand('copy');
    }


}
