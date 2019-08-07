import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入 min-ul
import {Header,Swipe,SwipeItem} from 'mint-ui';
//Vue.use(Mint);
import 'mint-ui/lib/style.min.css'

// 按需导入 mint-ui 中的组件
Vue.component(Header.name,Header)
import '@/assets/mui/css/mui.min.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '@/assets/mui/css/icons-extra.css'

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({       
  el: '#app',
  router,
  render: h => h(App)
})
