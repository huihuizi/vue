import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


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
  render: h => h(App)
})
