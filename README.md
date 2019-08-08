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


<!--  制作首页App组件 
        1、完成 Header区域，使用的是Mint-Ui 中的Header组件 
        2、制作底部的Tabbar 区域，使用的是 MUI 的 Tabbar.html 
        在制作 购物车 小图标的时候，操作会相对多一些：
        先把扩展图标的 css样式，拷贝到项目中
        拷贝 扩展字体库 ttf 文件，到项目中
        为 购物车 小图标，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
        3、要在 中间区域放置一个 router-view 来展示路由匹配到的组件 
-->


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
<!-- 发表评论
        1、把文本框做双向数据绑定
        2、为发表按钮绑定一个事件
        3、校验评论内容是否为空，如果为空，则 Toast提示用户，评论内容不能为空
        4、通过 vue-resource 发送一个请求，把评论内容提交给服务器
        5、当发表评论ok后，更新刷新列表，以查看最新的评论，
           如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
           换一种思路：当评论成功后，在客户端，手动拼接处一个 最新的评论对象，然后 调用 数组的 unshift方法，把最新的评论追加到 data 中 comments 的开头，这样就能完美实现刷新评论列表的需求
 -->

 <!-- 改造图片分享 按钮为 路由的链接并显示对应的组件页面 -->
 <!-- 绘制 图片列表 组件页面结构并美化样式 
        1、制作 顶部的滑动条
        2、制作 底部的图片列表
 -->
<!--  制作顶部 滑动条的坑 
        1、需要借助于 mui 中的 tab-top-webview-main.html
        2、需要把 slider 区域的 mui-fullscreen 类去掉
        3、滑动条无法正常的触发滑动，通过检查官方文档，发现这是一个js组件，需要被初始化一下
           * 导入 mui.js
           * 调用官方提供的 方式，去初始化
                ```
                        mui('.mui-scroll-wrapper').scroll({
                                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                        });
                ```
        4、我们在初始化 滑动条 的时候，导入的 mui.js，但是，控制台报错：
        'caller', 'callee', and 'arguments' properties may not be accessed on strict mode
        经过我们合理的推测，觉得，可能是 mui.js中用到了 'caller', 'callee', and 'arguments' 这三个东西，但是 webpack 打包好的 bundle.js中，默认是启用严格模式的，所以这两者冲突了
        解决方案：
                A、把mui.js中的非严格 模式的代码改掉，但是不现实
                B、把webpack打包时候的严格模式禁用掉
            最终，我们选择了 plan B  移除严格模式 ，使用这个插件
                babel-plugin-transform-remove-strict-mode
        5、刚进入图片分享页面的时候，滑动条无法正常工作，经过我们的分析，发现，如果要初始化 滑动条，必须要等Dom元素叫做完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mouted 生命周期函数中
        6、当滑动条 调试ok 后，发现，tabbar 无法正常工作了，这时候，我们需要把每个tabbar按钮的样式中 `mui-tab-item`重新改一下名字
        7、获取所有分类，并渲染分类列表
 -->

<!-- 制作图片列表区域
        1、图片列表需要使用赖加载技术，我们可以使用 mint-UI 提供的现成的组件 'lazy-load'
        2、根据'lazy-load'的使用文档，尝试使用
        3、渲染图片列表数据
 -->

<!-- 实现了 图片列表的 懒加载改造和 样式美化 -->

<!-- 实现了 点击图片 跳转到 图片详情页面
        1、在改造 li长 router-link 的时候，需要使用 tag 属性指定要渲染为 哪种元素
 -->
 <!-- 实现 详情页的布局和美化，同时获取数据渲染页面 -->

 <!-- 实现图片详情中缩略图中的功能
        1、使用插件 vue-preview 这个缩略图插件
        2、获取到所有的图片列表，然后使用v-for 指令渲染数据
        3、注意：img标签上的class不能去掉
        4、注意：每个 图片数据对象中，必须有 w 和 h 属性
 -->

 <!-- 尝试在手机上，去进行项目的预览和测试
        1、要保证自己的手机可以正常运行
        2、要保证 手机 和开发项目的电脑 处于同一个WIFI 环境中，也就是说 手机 可以 访问到 电脑的 IP
        3、打开自己的 项目 中package.json 文件，在 dev 脚本中，添加一个 --host指令，把当前电脑的WIFI IP地址。设置为 --host 的指令
          如何查看自己电脑所处 WIFI的IP呢，在cmd 终端中 运行在cmd中运行`ipconfig` ，查看 无线网的 Ip地址
  -->