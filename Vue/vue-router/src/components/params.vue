<template>
	<div>
		<h2>{{msg}}</h2>
    	<p> newsID:{{$route.params.newsId}}<br>
    	newsTitle:{{$route.params.newsTitle}}</p>
	</div>
</template>

<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params配置'
    }
  },
  beforeRouteEnter:function(to,from,next)
  {
    console.log('准备进入路由params模板');
    next();
  },
  beforeRouteLeave:function(to,from,next)
  {
    console.log('准备离开params路由');
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
