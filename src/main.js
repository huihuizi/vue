import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 每次刚进入 网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中，把购物车的数据读出来
//  放到 state 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
	state:{   //this.$store.state.***
    car:car    // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象，
                // 我们可以暂时将这个商品的对象，设计成这个样子 { id:商品的id，count:要购买的数量,price：商品的单价, selected：false}
  },
  mutations:{ // this.$store.commit("方法名","按需传递唯一的参数")
    addToCar(state,goodsinfo){ // 点击加入购物车，把商品信息，保存到 store 中的car 上
        //  分析：
          // 1、如果 购物车中，之前就已经有这个对应的商品了，那么只更新数量
          // 2、如果没有，就直接把商品数据，push 到 car 中即可
          
          // 假设在购物车中没有找到对应的商品，
          var flag = false
          state.car.some(item => {
            if(item.id == goodsinfo.id){
              item.count += parseInt(goodsinfo.count)
              flag = true
              return true 
            }
          })
          // 如果最终，循环完毕，得到的 flag 还是 false，则是把商品数据直接 push到 购物车中
          if(!flag){
            state.car.push(goodsinfo)
          }
          // console.log(state.car)
          // 当更新 car之后 ，把 car 数组，存储到 本地 的localStorage中
          localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){ //修改购物车中商品的数量值
      // 分析：
        state.car.some(item => {
          if(item.id == goodsinfo.id){
            item.count = parseInt(goodsinfo.count)
            return true;
          }
        })
        // 当修改完商品完数量把最新的购物车数据，保存到本地存储中
        localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFromCar(state,id){
      // 根据id，从store 中的购物车中删除对应的那条商品数据
      state.car.some((item,i) => {
        if(item.id = id){
          state.car.splice(i,1)
          return true
        }
      })
       // 将删除完毕之后最新的购物车数据，保存到本地存储中
       localStorage.setItem('car',JSON.stringify(state.car))
    },
    updataGoodsSelected(state,info){
      state.car.some(item => {
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
      // 把最新的所有购物车所有商品的状态保存到是store 中去
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{ // this.$store.getters.***
      // 相当于计算属性，也相当于 filters
      getAllCount(state){
        var c = 0;
        state.car.forEach(item => {
          c += item.count
        })
        return c
      },
      getGoodsCount(state){
        var o = {}
        state.car.forEach(item => {
           o[item.id] = item.count
        })
        return o;
      },
      getGoodsSelected(state){
        var o = []
        state.car.forEach(item =>{
          o[item.id] = item.selected
        })
        return o;
      },
      getGoodsCountAndAmount(state){
        var o = {
          count:0,      //勾选的数量
          amount:0      //勾选的总件
        }
        state.car.forEach(item => {
          if(item.selected){
            o.count += item.count
            o.amount += item.price * item.count
          }
        })
        return o;
      }
  }
})




//Vue.use(Mint);
import 'mint-ui/lib/style.min.css'

import '@/assets/lib/mui/css/mui.min.css'
//引入 min-ui
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// // 按需导入 mint-ui 中的组件
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// // 引入懒加载 
// Vue.use(Lazyload);
// 如果要懒加载，就不能按需加载，得全部加载
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import '@/assets/lib/mui/css/icons-extra.css';

// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})


// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 安装图片预览创建
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 建一个全局的css样式，给缩略图渲染出来的结构设置合适的样式
import '@/assets/lib/css/golbal.css';


// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({       
  el: '#app',
  router,
  render: h => h(App),
  store     //挂载
})
