<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>
<script>
import Item from "./item.vue";
import api from '@/api/index.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
    //   productList: [

    //         {
    //           image: "//p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c",
    //           title: "火鸡老店",
    //           type: "food",
    //           score: 4.1,
    //           commentNum: 0,
    //           comment: [
    //             {
    //               username: "xxxx",
    //               evalaute: "好吃"
    //             }
    //           ],
    //           tab: ["火锅", "沙河"],
    //           address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
    //           avgPrice: 64,
    //           dealItems: [
    //             {
    //               title: "火鸡宴，建议10-14人使用",
    //               price: 909,
    //               counterPrice: 1150,
    //               saleNum: 0,
    //               priceType: "元"
    //             }
    //           ]
    //         }

    //   ]
     productList: [],
    };
  },
    created() {
      api.getProductsList().then((res) => {
        if (res.data.status == 'success') {
          this.productList = res.data.data
        }
      })
    },
  components: {
    Item
  }
};
</script>

