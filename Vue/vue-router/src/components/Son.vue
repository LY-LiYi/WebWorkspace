<template>
    <div class="app" :class="['son']">
        <p>这是子组件的值</p>
        <h1>父组件的props{{dataname}}</h1>
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
