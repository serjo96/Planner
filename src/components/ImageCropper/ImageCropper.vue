<template>
  <div class="image-cropper">
      <div class="image-cropper__body">
          <canvas @mouseup="handleDragImageEnd" @mousedown="startDrag" @mousemove="moveImage" class="image-cropper__canvas" ref="canvasImage"></canvas>
          <v-slider
                  min="1"
                  max="200"
                  v-model="slider"
                  label="Zoom"
                  thumb-label
          ></v-slider>
      </div>
  </div>
</template>

<script lang="ts" src="./ImageCropper.ts"></script>

<style scoped></style>
