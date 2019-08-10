<template>
    <div class="shopcar-container">
        <div class="goodslist">
            <!-- 商品列表项区域 -->
            <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥ {{ item.sell_price }}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid='item.id'></numbox>
                                <!-- 问题：如何从购物车获取商品的数量呢？、
                                    1、我们可以先创建一个 空对象，然后循环购物车中所有商品的数据，
                                        把当前循环这条商品的 Id ，作为 对象的属性名，count 值 作为 对象的属性值，
                                        这样，当把所有的商品循环一遍，就会得到一个对象{88:2,89:1,90:4}
                                 -->
                                <a href="javascript:;" @click.prevent="remove(item.id,item.index)">删除</a>
                                <!-- item.id是用来删除store中的数据，item.index是用来删除goodslist中的数据 -->
                            </p>
                        </div>
                    </div>
				</div>
			</div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                   <div class="left">
                       <p>总计(不含运费)</p>
                       <p>已勾选商品 
                            <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span>
                            件，总件 
                            <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span>
                        </p>
                   </div>
                   <mt-button type="danger">去结算</mt-button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import Numbox from '@/components/subcomponents/Shopcar_numbox'
export default {
    name:"shopcarcontainer",
    data(){
        return{
            goodslist:[]    //购物车中所有商品的数据
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){ //获取购物车商品列表
            // 1、获取到 store 中所有的商品的id，然后 拼接出一个 用逗号分隔的 字符串
            var idArr = []
            this.$store.state.car.forEach(item => idArr.push(item.id))
            // 如果购物车中 没有商品 则直接返回，不需要请求数据接口，否则会报错
            if(idArr.length <= 0){
                return;
            }
            //获取购物车商品列表
            this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then((result) => {
                if(result.body.status === 0 ){
                    this.goodslist = result.body.message;
                    // console.log(this.goodslist)
                }
            })
        },
        remove(id,index){
            // 点击删除，把商品从 store 中根据 传递的 id 删除，、
            // 同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
            this.goodslist.splice(index,1)
            this.$store.commit('removeFromCar',id)
        },
        selectedChanged(id,value){
            // 每当点击开关把最新的开关状态，同步到 store
            // console.log(id + '------' + value)
            this.$store.commit('updataGoodsSelected',{id,selected:value})
        }
    },
    components:{
        Numbox
    }
}
</script>
<style lang="less" scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goodslist{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width:60px;
            height:60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            p{
                display:flex;
                .price{
                    color:red;
                    font-weight: bold;
                }
            }
            
        }
    }
    .jiesuan{
        display:flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color:red;
            font-size: 16px;
            font-weight: bold;
        }
    }
}
</style>


