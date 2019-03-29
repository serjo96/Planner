<template>
    <div class="pre-loader">
        <v-progress-circular
                :width="3"
                color="red"
                indeterminate
        ></v-progress-circular>
    </div>
</template>

<script src="./PreLoader.ts" lang="ts"></script>

<style lang="stylus" scoped>
    .pre-loader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
