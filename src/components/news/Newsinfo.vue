<template>
    <div class="newsinfo-container">
        <!-- 标题 -->
        <h3 class="title">{{ newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_titme }}</span>
            <span>点击：{{newsinfo.click}} </span>
        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论 -->
        <comment :id="this.id"></comment>
    </div>
</template>
<script>
// import { Toast } from "mint-ui"
// 1、导入 评论子组件
import Comment from "../subcomponents/Comment"
export default {
    name:"newsinfo",
    data(){
        return{
            id: this.$route.params.id,       //这是将 url 地址中传递过来的 Id值，
                                            // 挂载到 data 上，方便以后调用
            newsinfo:[]             //新闻空对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/' + this.id ).then(result =>{
                if(result.body.status ===0 ){
                    this.newsinfo = result.body.message[0]
                    // console.log(this.newsinfo)
                }else{
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{
        Comment
    }
}
</script>
<style lang="less">
.newsinfo-container{
    padding:0 4px;
    .title{
        font-size: 16px;
        text-align:center;
        padding:15px 0;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width:100%;
            height:100%;
        }
    }
}
</style>


