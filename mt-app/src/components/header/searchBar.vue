<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
 <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                    <div class="wrapper">
                        <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blurInput" @input="input"></el-input>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                        <dl class="hotPlace" v-if="isHotPlace">
                            <dt>热门搜索</dt>
                            <dd v-for="(item,index) in HotPlaceList" :key="index">
                                <router-link :to="{name: 'goods',params:{name:item}}">{{item}}</router-link>
                            </dd>
                             <!-- <dd>
                                <router-link to="/">99旅游连锁</router-link>
                            </dd>
                              <dd>
                                <router-link to="/">尚客优快捷酒店</router-link>
                            </dd> -->
                        </dl>
                        <dl class="searchList" v-if="isSearchList">
                            <dd v-for="(item,index) in searchList" :key="index">
                                <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link></dd>
                            <!-- <dd><router-link to="/">火锅自助餐</router-link></dd>
                            <dd><router-link to="/">火锅 重庆</router-link> </dd> -->
                        </dl>
                    </div>
                    <p class="suggest">
                        <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
                        <!-- <a href="#">99旅游连锁</a>
                        <a href="#">尚客优快捷酒店</a>
                        <a href="#">7天连锁酒店</a> -->
                        </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      HotPlaceList: [],
      searchList: [],
      suggestList: [],
    }
  },
  created(){
   api.searchHotWords().then(res => {
      console.log(res)
      this.HotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }

  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blurInput () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input(){
      let val = this.searchWord;
        api.getSearchList().then(res =>{
          // console.log(res);
          this.searchList = res.data.data.list.filter((item,index)=>{
            return item.indexOf(val)> -1;
          })
        })

    }

  },
  mounted(){

  }

}
</script>
<style lang="scss">
@import '@/assets/css/public/header/index.scss';
@import '@/assets/css/public/header/search.scss';
</style>
