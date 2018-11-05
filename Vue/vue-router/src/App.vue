<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/Hi">Hi页面</router-link>
      <router-link :to="{name:'Hello/Hi1',params:{username:'xixi',id:'8888'}}">Hi页面1</router-link>
      <router-link to="/Hi/hi2">Hi页面2</router-link>

    </div> -->
    <div>
      <button @click="goback">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>

    </div>
    <router-link  to="/" :class="['bg']">home</router-link>|
    <router-link  to="/params/66/ly websit  come on" :class="['bg']">params</router-link>|
    <router-link  to="/gohome" :class="['bg']">goHome</router-link>|
    <router-link  to="/goParams/918/xiix" :class="['bg']">goParams</router-link>|
    <router-link  to="/xixi" :class="['bg']">xixi</router-link>|
    <router-link  to="/6666" :class="['bg']">我是瞎写的</router-link>|
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
   <!--  <router-view  name="Left" ><b/router-view>
    <router-view  name="Right"></router-view> -->   
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:
  {
    goback:function()
    {
      this.$router.go(-1);
    },
    goGo:function()
    {
      this.$router.go(1);
    },
    goHome:function()
    {
      this.$router.push('/');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter
{
  opacity: 0;
}
.fade-enter-active
{
  transition: opacity 0.5s;
}
.fade-leave
{
  opacity: 1;
}
.fade-leave-active
{
  opacity: 0;
  transition: opacity 0.5s; 
}
.bg
{
  color: pink;
}
</style>
