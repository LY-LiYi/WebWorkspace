import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Hi from '@/components/Hi'
import Hi1 from '@/components/hi1'
// import hi2 from '@/components/hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/params'
import Error from '@/components/Error'
import Father from '@/components/Father'
import Recursive from '@/components/Recursive'



Vue.use(Router)

//定义一个路由并使用 export default暴露路由对象 让整个应用都有路由功能
export default new Router({

  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
    },
    {
      //添加正则 只有数字才能传递
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
    },
    {
      path:'/goHome',
      redirect:'/',
    },
    {
      path:'/goparams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle',
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/xixi',
    },
    {
      path:'*',
      component:Error,
    },
    {
      path:'/father',
      component:Father,
    },
    {
        path:'/Recursive',
        component:Recursive,
    }
  ]
})
