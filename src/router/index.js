import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homecontainer',
      component: HomeContainer
    },
    {
      path: '/home',
      name: 'Homecontainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    }
  ],
  linkActiveClass:"mui-active"      // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
