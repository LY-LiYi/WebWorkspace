<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '../src/components/m-header/m-header.vue'
import Tab from '../src/components/tabs/tab.vue'

export default {
  name: 'App',
  components:
  {
  	MHeader,Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/variable"

  #app
   color: $color-theme
</style>
