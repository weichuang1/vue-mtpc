<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item,index) in nav.list" :key="index" :class="{active: kind ==item.tab}" :data-type="item.tab">{{item.text}}</dd>
      <!-- <dd :class="{active: kind =='food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active: kind =='spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: kind =='movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active: kind =='travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div  class="cbody">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
              <!-- <div class="price-info" v-if="item.rentNum && item.price_info.current_price"> -->
                <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{item.price}}</span>
                </span>
                 <span class="sold bottom-right-info">{{item.address}}</span> 
                <!-- <span class="old-price">门市价¥{{ item.price_info.old_price}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span> -->
              </div>
              <!-- <div class="price-info" v-else-if="!item.rentNum">
                   <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">抢光了</span>
                </span>
              </div>
              <div class="price-info" v-else> 
                   <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                  <span class="units">/{{ item.price_info.units}}均</span>
                </span>
              </div> -->
          </div>
        </el-card>
      </li>
    
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            kind:'all',
            resultsData:{},
            list:[{
                image:"//p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@460w_260h_1e_1c",
                title:'丰泽园饭店（王府井店）',
                sub_title:"4人自选套餐，提供免费WiFi",
                price_info:{
                    current_price:null,
                    old_price:null,
                    avg_price:18,
                    units:'人',

                },
                 rentNum:10,
                address:"王府井/东单",

            },{
                image:"//p0.meituan.net/msmerchant/ba7de08d8591508b0ac0f98eccd45b03344331.jpg@460w_260h_1e_1c",
                title:'大教堂蛋糕 Kathedral（王府中环店）',
                sub_title:"众神的狂欢夜蛋糕1个，约6寸，极繁主义",
                price_info:{
                    current_price:498,
                    old_price:689,
                    avg_price:null,
                    units:null,

                },
                rentNum:10,
                address:"王府井/东单",
            },{
                image:"//p1.meituan.net/bbia/2f94dd8505c13cb5accb79275fcb3d92102474.jpg@460w_260h_1e_1c",
                title:'黑松白鹿（崇文门新活馆店）',
                sub_title:"工作日午市经典自助餐二",
                price_info:{
                    current_price:298,
                    old_price:328,
                     avg_price:null,
                    units:null,

                },
                rentNum:10,
                address:"崇文门新世界",
            },
            ]
        }
    },
    props:[
        'nav'
    ],
    created(){
      api.getResultProducts().then(res =>{
        console.log(res);
          this.resultsData = res.data.data;
      })
    },
    methods:{
        over(e){
            console.log(e.target)
            let dom = e.target;
            let tagName = dom.tagName.toLowerCase();

            if(tagName !='dd'){
                return false;
            }
            this.kind = dom.getAttribute('data-type');
            //动态获取数据 ajax接口

        }
    }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>