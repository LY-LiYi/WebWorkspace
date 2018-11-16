<template>
    <div class="father">
        <p>父组件的值{{name}}</p>
        <Son :name='name'></Son><button @click="add">点击+1</button>
    </div>
</template>

<script>
import Son from './Son.vue'

export default {
data(){
    return{
        name:[1],
    }
},
methods:{
    add(){
        this.name.push(1);
    }
},
components:{ Son}
}
</script>

<style>

</style>
