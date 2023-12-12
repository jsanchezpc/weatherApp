<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "@/scss/_variables";
  html {
    body {
      margin: 0;
      font-family: 'Jost', sans-serif;
      div#app {
        height: 100dvh;
        width: 100dvw;
        background-color: $dark;
        color: $main;
        max-width: 100dvw;
      }
    }
  }
</style>