<template>
    <div class="goods-list">
        <!-- <router-link :to="'/home/goodsinfo/' + item.id " class="goods-item" v-for="(item,index) in goodslist" :key="index" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">
                {{ item.title }}
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{ item.sell_price }}</span>
                    <span class="old">{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.stock_quantity}} 件</span>
                </p>
            </div>
        </router-link> -->
        <!-- 字网页中有两种跳转方式，
            方式一：使用a标签的形式， 叫做 标签跳转
            方式二：使用 window.location.href 的形式，叫做 编程式导航
         -->
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="getDateil(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">
                {{ item.title }}
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{ item.sell_price }}</span>
                    <span class="old">{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.stock_quantity}} 件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    name:"gootslist",
    data(){
        return {
            pageindex:1,     //分页的页数
            goodslist:[]    //存放商品列表的数组
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){ //获取商品列表
            this.$http.get('api/getgoods?pageindex=' + this.pageindex ).then(result =>{
                if(result.body.status ===0 ){
                    this.goodslist = this.goodslist.concat(result.body.message)
                    // console.log(this.goodslist)
                }
            })

        },
        getMore(){
            this.pageindex++
            this.getGoodsList()
        },
        getDateil(id){  //使用js的形式进行路由跳转
        // 注意：一定要区分 this.$route 和 this.$router 这两个对象
            //其中： this.$route是路由参数对象，所有跟路由中的参数，params，query都属于它
            // 其中：this.$router是一个路由导航对象，用它 可以方便的 使用 Js代码，实现路由的前进，后退，跳转到新的 Url地址 
        // 1、最简单的 
            // this.$router.push('/home/goodsinfo/' + id )
        // 2、传递对象
            // this.$router.push({path:"/home/goodsinfo/" + id} )
        // 3、命名的路由
            this.$router.push({ name: 'Goodsinfo', params: { id }})
            // 属性名是id，属性值是id，就直接写id，这的name是路由的名字
        // 注意：path不能和params一起用，如果一起用了params就会被忽略
        }
    }
}
</script>
<style lang="less" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding:7px;
    justify-content: space-between;
    .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding:2px;
        margin:4px 0;
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background: #eeeeee;
            p{
                margin:0;
                padding:5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left:10px; 
                }
            }
            .sell{
                display:flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>


