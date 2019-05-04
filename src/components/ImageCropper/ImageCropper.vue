<template>
  <div class="image-cropper">
      <div class="image-cropper__body">
          <div class="image-cropper__container"

          >
              <div class="image-cropper__target-image-container">
                <img class="image-cropper__image" ref="editingImage" :src="imageUrl" alt="">
              </div>
          </div>
          <!--<canvas  class="image-cropper__canvas" ref="canvasImage"></canvas>-->
          <v-slider
                  min="1"
                  max="200"
                  v-model="slider"
                  label="Zoom"
                  thumb-label
          ></v-slider>
          <v-btn @click="cropImage">crop</v-btn>
          <v-btn @click="resetCanvas">reset</v-btn>
      </div>
  </div>
</template>

<script lang="ts" src="./ImageCropper.ts"></script>

<style src="./ImageCropper.stylus" lang="stylus" scoped></style>
