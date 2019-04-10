<template>
    <v-dialog
            v-model="dialogModal"
            width="500"
            dark
            class="image-selector"
    >
        <v-form
                @keyup.native.enter="onSubmit"
        >

            <v-card>
                <v-card-title class="image-selector__header">
                    <span class="headline display-1">Change photo</span>
                    <v-btn @click="dialogModal = false" icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>

                <div class="image-selector__body text-xs-center">
                    <div class="image-selector__selector-heading">
                        <p>Update your profile photo</p>
                    </div>


                    <div class="image-selector__selector">
                        <div
                                class="image-selector__upload-drop-zone"
                                @drop="dropFile"
                                @dragover.prevent="dropZoneDragOver"
                                @dragleave.prevent="dropZoneDragLeave"
                        >
                            <label for="upload-image">
                                <p>drop photo here or click</p>
                            </label>
                        </div>
                        <PreLoader v-if="getStartUploading && !getUploadStatus"></PreLoader>
                        <canvas v-if="getUploadStatus" class="image-selector__selector-canvas" ref="canvasImage"></canvas>
                    </div>
                </div>

                <div class="image-selector__footer">
                    <input accept="image/*"
                           id="upload-image"
                           class="image-selector__upload-input"
                           type="file"
                           ref="uploaderInput"
                           @change="uploadFile">

                    <v-btn
                            :loading="getStartUploading && !getUploadStatus"
                            class="image-selector__upload-button">
                        <label for="upload-image">
                            <span>upload photo</span>
                            <v-icon>cloud_upload</v-icon>
                        </label>
                    </v-btn>
                </div>


            </v-card>
        </v-form>

    </v-dialog>
</template>

<script lang="ts" src="./ImageSelector.ts"></script>

<style src="./Image-selector.stylus" lang="stylus" scoped></style>
