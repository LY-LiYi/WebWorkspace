<template>
	<div>
		<h2>{{msg}}</h2>
		<hr>
		<h3>{{$store.state.count}}++{{count}}</h3>
		<p>
			<button @click="$store.commit('add',10)">+</button>
			<button @click="reduce">-</button>
		</p>
		<p>
			<button @click="addAction">+</button>
			<button @click="reduceAction">-</button>
		</p>
	</div>
</template>

<script>
	import store  from'@/vuex/store';
	import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
	export default {
		name:'Count',
		data(){
			return {
				msg: 'Hello  Vuex'
			};
		},
		computed:
		{
			...mapState(['count']),
			// count()
			// {
			// 	return this.$store.getters.count;
			// }
			//简写
			...mapGetters(['count']),
		},
		methods:
		{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction']),
		},
		store 
	}
</script>