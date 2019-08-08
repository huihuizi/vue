import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//Vue.use(Mint);
import 'mint-ui/lib/style.min.css'
//引入 min-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
import '@/assets/mui/css/mui.min.css'

// 按需导入 mint-ui 中的组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import '@/assets/mui/css/icons-extra.css';

// 导入时间插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})


// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';

/* eslint-disable no-new */
new Vue({       
  el: '#app',
  router,
  render: h => h(App)
})
