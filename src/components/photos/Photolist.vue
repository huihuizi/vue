<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!-- @tap只能在mui中使用， -->
                    <a :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']" v-for="(item,index) in cates" :key=index @tap="getFhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <!-- tag='' 指定渲染的元素 -->
            <router-link :to="'/home/photoinfo/' + item.id" tag="li" v-for="(item,index) in list" :key=index>
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title"> {{ item.title }} </h1>
                    <div class="info-body"> {{ item.zhaiyao }} </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
// 1、导入mui的js文件
import mui from "../../assets/lib/mui/js/mui.min.js";

export default {
    name:"photoslist",
    data(){
        return{
            cates:[],        //所有分类的列表
            list:[]           //图片列表的数组
        }
    },
    created(){
        this.getAllCategory()
        // 默认进入页面就主动请求所有图片列表的数据
        this.getFhotoListByCateId(0)
    },
    mounted(){      //当组件中dom结构被渲染好，并放到页面中后，会执行这个钩子函数
        // 如果要操作元素，最好在 mounted 里面，因为这时候的dom元素，是最新的
        // 2、初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllCategory(){   //获取所有的图片分类
             this.$http.get('api/getimgcategory').then(result =>{
                if(result.body.status ===0 ){
                    // 手动拼接出完整的 分类列表
                    result.body.message.unshift({ title:'全部',id:0 })
                    this.cates = result.body.message
                }
            })
        },
        getFhotoListByCateId(cateId){
            // 根据分类id，获取图片列表
            this.$http.get('api/getimages/' + cateId).then(result =>{
                if(result.body.status ===0 ){
                    this.list = result.body.message
                }
            })
        }
        
    }
}
</script>
<style lang="less" scoped>
    *{
        touch-action: pan-y;
    }
    
    .photo-list{
        margin:0;
        padding:10px;
        padding-bottom: 0;
        li{
            background:#ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow:0 0 9px #999;
            position: relative;
            img{
                width:100%;
                vertical-align: middle;
            }
            // 懒加载图片
           img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color:white;
                text-align: left;
                position: absolute;
                bottom:0;
                background-color:rgba(0,0,0,0.4);
                max-height: 84px;
                overflow: hidden;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }
</style>


