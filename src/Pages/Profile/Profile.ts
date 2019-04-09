import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class';
import ImageSelector from "@/components/ImageSelector/ImageSelector.vue";


@Component({
    components: { ImageSelector }
})
export default class Profile extends Vue {
    uploadPhotoDialog: boolean = false;
    name: string = '';
    email: string = '';
    showPassword: boolean = false;
    password: string = '';
    editName: boolean = false;
    editEmail: boolean = false;
    nameRules: [Function] = [
        (v: string) => !!v || 'This field is required',
    ];
    emailRules: any = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];

    passwordRule = [
        (value: string ) => !!value || 'Required.',
    ];


    @Action updateName: any;
    @Action changeEmail: any;
    @Getter('userData') User: any;
    @Getter getRequestResponse: any;


    created(){
        this.name = this.User.displayName;
    }

    fieldValidate(ref: string){
        return (this.$refs[ref] as Vue & { validate: () => boolean }).validate()
    }


    onChangeName(){
        if(this.fieldValidate('name')){
            this.editName = false;
            this.updateName(this.name);
        }
    }

    onChangeEmail(){
        if(this.fieldValidate('emailRef') && this.fieldValidate('passwordRef')){
            this.changeEmail({
                email: this.email,
                password: this.password
            });

        }
    }

    @Watch('getRequestResponse')
    requestResponseWatcher(){
        if(this.getRequestResponse){
            this.editEmail = false;
            this.password = '';
            this.email = '';
        }
    }

}
