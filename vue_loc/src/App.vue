<template>
  <div id="app" :class="i18nclass">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    i18nclass () {
      return 'body-i18n-' + this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
@import './style/themeDefault';
@import './style/common';
@import './style/theme';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>
