<template>
    <div class="image-uploader">
        <div class="image-selector__selector-heading">
            <p>Update your profile photo</p>
        </div>

        <div class="image-selector__selector">
            <div class="image-selector__upload-drop-zone">
                <label @drop="dropFile"
                           @dragover.self.stop.prevent="dropZoneDragOver"
                           @dragleave.self.stop.prevent="dropZoneDragLeave"
                           class="image-selector__upload-drop-zone-label"
                           for="upload-image"
                >
                        drop photo here or click
                </label>
            </div>
            <PreLoader v-if="getStartUploading && !getUploadStatus"></PreLoader>
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

    </div>
</template>

<script lang="ts" src="./ImageSelector.ts"></script>

<style src="./Image-selector.stylus" lang="stylus" scoped></style>
