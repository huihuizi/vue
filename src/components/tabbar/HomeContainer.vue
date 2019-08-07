<template>
    <div>
        <!-- 这是轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for 就一定使用 key -->
            <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 到 六宫格的改造 -->
        <!-- 九宫格 到 六宫格 的改造工程-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../assets/img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../assets/img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../assets/img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../assets/img/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
           <img src="../../assets/img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>

        <h3>homecontainer</h3>
    </div>
</template>
<script>
export default {
    name:"homecontainer",
    data(){
        return{
            lunbotuList:[]          //保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){       //获取轮播图数据的方法
            this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
                console.log(result.body.message)
                this.lunbotuList = result.body.message
            })
        }
    }
}
</script>
<style lang="less" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        &:nth-child(1){
            background:skyblue;
        }
        &:nth-child(2){
            background:wheat;
        }
        &:nth-child(3){
            background:lavender;
        }
    }
    img{
        width:100%;
        height:100%;
    }
}
.mui-grid-view.mui-grid-9{
  background: #ffffff;
  border:none;
  img{
    width:60px;
    height:60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
}
</style>


