<template>
    <div class="goodsinfo-container">
       <comment :id="this.id"></comment>
    </div>
</template>
<script>
// 1、导入 评论子组件
import Comment from "../subcomponents/Comment"
export default {
    name:"gootscomment",
     data(){
        return{
            id: this.$route.params.id, 
        }
    },
    components:{
        Comment
    }
}
</script>
<style lang="less" scoped>

</style>


