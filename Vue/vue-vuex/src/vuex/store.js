import Vue from 'vue';
import Vuex from 'vuex';

//使用 vuex
Vue.use(Vuex);

const state=
{
	count:3,
}

const mutations=
{
	add(state,n)
	{
		state.count+=n;
	},
	reduce(state)
	{
		state.count--;
	}
}

const getters=
{
	count:function()
	{
		return state.count+=10;
	}
}

const  actions=
{
	addAction(context)
	{
		context.commit('add',10);
		setTimeout(function()
			{
				context.commit('reduce')
			},3000);
		console.log("我是比reduce先执行");
	},
	reduceAction({commit})
	{
		commit('reduce');
		console.log("我是比add后执行");
	}
}


export default new Vuex.Store(
{
	state,
	mutations,
	getters,
	actions,
});