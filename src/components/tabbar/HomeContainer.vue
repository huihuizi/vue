<template>
    <div>
        <!-- 这是轮播图区域 -->
        <sliper :lunbotuList="lunbotuList" :isfull="true"></sliper>
        <!-- 九宫格 到 六宫格的改造 -->
        <!-- 九宫格 到 六宫格 的改造工程-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
           <img src="../../assets/img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
           <img src="../../assets/img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
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
    </div>
</template>
<script>
import Sliper from "@/components/subcomponents/Sliper"
export default {
    name:"homecontainer",
    data(){
        return{
            lunbotuList:[]          //保存轮播图的数组
        }
    },
    components:{
      Sliper
    },
    created(){
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){       //获取轮播图数据的方法
            this.$http.get('api/getlunbo').then(result =>{
                // console.log(result.body.message)
                this.lunbotuList = result.body.message
            })
        }
    }
}
</script>
<style lang="less" scoped>

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


