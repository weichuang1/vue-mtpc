<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+ item">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item,index) in cityGroup"
      :key="index"
      :id="'city-'+index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEGHIJKLMNOBQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    api.getCityList().then(res => {
      var obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      console.log(obj);
      this.cityGroup = obj;
    });
    // var data = [
    //   {
    //     id: 1,
    //     name: "北京",
    //     pinyin: "beijing",
    //     acronym: "bj",
    //     rank: "S",
    //     firtstChar: "b"
    //   },
    //   {
    //     id: 40,
    //     name: "天津",
    //     pinyin: "tianjin",
    //     acronym: "tj",
    //     rank: "A",
    //     firtstChar: "t"
    //   },
    //   {
    //     id: 42,
    //     name: "西安",
    //     pinyin: "xian",
    //     acronym: "xa",
    //     rank: "A",
    //     firtstChar: "x"
    //   },
    //   {
    //     id: 1,
    //     name: "北京",
    //     pinyin: "beijing",
    //     acronym: "bj",
    //     rank: "S",
    //     firtstChar: "b"
    //   },
    //   {
    //     id: 1,
    //     name: "北京",
    //     pinyin: "beijing",
    //     acronym: "bj",
    //     rank: "S",
    //     firtstChar: "b"
    //   }
    // ];
  },
  methods: {
    changeCity(item) {
        this.$store.dispatch('setPosition',item);
        this.$router.push({name:'index'})
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>