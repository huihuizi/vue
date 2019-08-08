# xm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report    
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<!--  制作首页App组件 -->
<!-- 1、完成 Header区域，使用的是Mint-Ui 中的Header组件  -->
<!-- 2、制作底部的Tabbar 区域，使用的是 MUI 的 Tabbar.html 
        在制作 购物车 小图标的时候，操作会相对多一些：
        先把扩展图标的 css样式，拷贝到项目中
        拷贝 扩展字体库 ttf 文件，到项目中
        为 购物车 小图标，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
-->
<!-- 3、要在 中间区域放置一个 router-view 来展示路由匹配到的组件 -->

<!-- 改造 tabar 为 router-link -->
<!-- 设置路由高亮 -->
<!-- 点击 tabbar 中的路由连接，展示对应的路由组件 -->
<!-- 制作首页轮播图，加载轮播图数据  -->
<!--   获取数据，使用 vue-resource  
        使用vue-resource 的this.$http.get 获取数据
        获取到的数据，要保存到 data 身上
        使用 v-for 循环渲染，每个 item项
-->
<!-- 改造九宫格区域的样式 -->

<!-- 改造新闻资讯列表链接 -->
<!-- 新闻资讯 页面 制作 -->
<!--    1、绘制界面，
        2、使用 vue-resource 获取数据
        3、渲染真实数据
 -->

 <!--  实现  新闻资讯列表 点击跳转到新闻详情-
        1、吧列表中的每一项改造为 router-link，同时，在跳转的时候应该提供唯一的Id标识符
        2、创建新闻详情的组件页面 NewsInfo.vue
        3、在路由模板中，将 新闻详情的 路由地址 和组件页面对应起来
 ->
 <!-- 实现 新闻详情的 页面布局，和数据渲染 -->
 <!-- 单独封装已读 comment.vue 评论子组件
        1、先创建一个 单独的 comment.vue组件模板
        2、在需要的 comment 组件的 页面中，先手动导入 comment组件，+   `import comment from './comment.vue'`
        3、在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
        4、将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可
  -->
  <!-- 湖区所有的评论数据 显示到页面中 -->
  <!-- 实现点击加载更多评论的功能
        1、为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
        2、点击加载更多，让 pageIndex++ 然后重新调用 this。getComments() 方法重新获取最新一页的数据
        3、为了防止新数据覆盖老数据的情况，我们在 点击加载更多的时候，每当获取新数据，应该让 老数据调用 数组的 concat 方法，拼接上新数据
   -->