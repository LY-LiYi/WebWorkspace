<template>
    <div class="app" :class="['son']">
        <p>这是子组件的值</p>
        <p>这是父组件的{{name}}</p>
        <h1>props{{dataname}}</h1>
    </div>

</template>

<script>
export default {
    data(){
        return{
            dataname:''
        }
    },
  props: ["name"],
  watch:{
          name(val){
            this.dataname=val;
          }
      
  }
};
</script>

<style scoped>
    .son{
        color: dodgerblue;
    }
</style>
