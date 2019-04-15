<template>
    <v-dialog
            v-model="dialogModal"
            max-width="744"
            dark
            content-class="profile-photo-dialog"
    >

            <v-card>
                <v-card-title class="profile-photo-dialog__header">
                    <span class="headline display-1">Change photo</span>
                    <v-btn @click="dialogModal = false" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>

                <div class="profile-photo-dialog__body text-xs-center">
                    <ImageSelector v-if="!getOriginalImgURL"></ImageSelector>
                    <ImageCropper :image="getOriginalImgURL" v-if="getOriginalImgURL"></ImageCropper>
                </div>


            </v-card>

    </v-dialog>
</template>

<script src="./ProfilePhotoDialog.ts" lang="ts"></script>

<style src="./ProfilePhotoDialog.stylus" lang="stylus" scoped></style>
