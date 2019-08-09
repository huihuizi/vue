<template>
    <div class="photoinfo-container">
       <h3 class="title">{{ photoinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{ photoinfo.click }}</span>
        </p>
        
        <hr>
        <!-- 缩略图区域 -->
        <!-- <vue-preview :slides="slide1" @close="handleClose"></vue-preview> -->
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>
        <!-- 放置一个现成的 评论子组件 -->
         <comment :id="this.id"></comment>
    </div>
</template>
<script>
// 1、导入 评论子组件
import Comment from "../subcomponents/Comment"
export default {
    name:"photosinfo",
    data(){
        return{
            id:this.$route.params.id,    //从路由中获取到的图片id
            photoinfo:[],        //图片详情
            list:[]             //缩略图的数组
        }
    },
    components:{
        Comment         //注册评论子组件
    },
    created(){
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods:{
        getPhotoInfo(){  //获取图片的详情
            this.$http.get('api/getimageInfo/' + this.id).then(result =>{
                if(result.body.status ===0 ){
                    this.photoinfo = result.body.message[0]
                    // console.log(this.photoinfo)
                }
            })
       },
        getThumbs(){  //获取图片的详情
            this.$http.get('api/getthumimages/' + this.id).then(result =>{
                if(result.body.status ===0 ){
                    // 循环每个图片数据，补全图片的宽和高
                    result.body.message.forEach(item => {
                        item.w = 600
                        item.h = 400
                        item.msrc = item.src
                    });
                    // 把完整的数据保存到list中
                    this.list = result.body.message
                    console.log(this.list)
                }
            })
       }, 
    }
}
</script>
<style lang="less" scoped>
.photoinfo-container{
    padding:3px;
    .title{
        font-size: 16px;
        text-align:center;
        padding:15px 0;
        color: #26A2ff;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>


