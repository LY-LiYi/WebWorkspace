<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[1,2,3,4,5]
    }
  },
  created:function()
  {
    
      var arr=[4,66,45,7,88];
      console.log("foreach方法");
      arr.forEach((val,item)=>console.log(val+'-----'+item));

      console.log("for in方法");
      for (var val in arr) 
      {
        console.log(val);
      };

      console.log("for of方法");
      for (var item  of arr) 
      {

        console.log(item);
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
