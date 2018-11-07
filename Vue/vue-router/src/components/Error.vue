<template>
  <div>
    <h2 :class="['bg']">{{msg}}</h2>
    此页面不存在
  </div>
   
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      msg: 'Error:404'
    }
  },
  mounted()
  {
    showname:
    {
     console.log('show');
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg
  {
    color: red;
  }
</style>
