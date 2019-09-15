<template>
    <div class="m-menu">
         <dl class="nav" @mouseleave="menuLeave">
             <dt>全部分类</dt>
             <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                 <i class="item.type"></i>
                 {{item.name}}
                 <span class="arrow"></span>
             </dd>
             <!-- <dd>
                  <i class="takeout"></i>
                  外卖
                 <span class="arrow"></span>
             </dd>
             <dd>
                  <i class="hotel"></i>
                 酒店
                 <span class="arrow"></span>
             </dd> -->
         </dl>
         <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
             <template v-for="(item,index) in curDetail.items" >
                 <h4 :key="index">{{ item.title}}</h4>
                 <span v-for="(v,i) in item.items" :key="v + '_' + i ">{{v}}</span>
                 <!-- <span>甜品饮食</span>
                 <span>火锅自助餐</span>
                 <span>小吃快餐</span>
                 <span>日韩料理</span>
                 <span>西餐</span>
                 <span>聚餐宴请</span>
                 <span>烧烤烤肉</span> -->
             </template>
         </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            curDetail:null,
            menuList:[],
            // menuList:[{
            //     title:'美食',
            //     icon:'food',
            //     children:[{
            //          title:'美食',
            //          children:[ '代金卷', '甜品饮食', '火锅自助餐','小吃快餐', '日韩料理', '西餐','聚餐宴请','烧烤烤肉'],
            //     }],
            // },{
            //     title:'外卖',
            //     icon:'takeout',
            //     children:[{
            //          title:'外卖',
            //          children:[ '美团外卖'],
            //     }],
            // },{
            //     title:'酒店',
            //     icon:'hotel',
            //     children:[{
            //          title:'酒店星级',
            //          children:[ '经典型', '舒适/三星', '高档/四星','豪华/五星'],
            //     }],
            // }
            // ],

        }
    },
    created(){
       api.getMenuList().then(res=>{
           console.log(res)
           this.menuList = res.data.data;
       })
    },
    methods:{
        menuEnter(item){
        console.log(item)
        this.curDetail=item;
        },
        menuLeave(){
            let self = this;
            this.timer = setTimeout(function() {
                self.curDetail = null;
            },200);

        },
        detailEnter(){
         clearTimeout(this.timer);
        },
        detailLeave(){
            this.curDetail = null;
        }
    }

}
</script>
<style lang="scss">

</style>