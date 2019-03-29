<template>
  <div id="app">
    <v-app>
        <router-view></router-view>
    </v-app>
  </div>
</template>

<script src="./App.ts" lang="ts"></script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100,500);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(237, 238, 240);
}
    .pre-loader-parent {
        position: relative;
    }
</style>
