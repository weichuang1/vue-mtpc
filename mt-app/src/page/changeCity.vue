<template>
    <div class="page-changeCity">
        <el-row>
           <province />
        </el-row>
        
        <el-row>
            <hot title=" 热门城市:" :list="hotlist" />
        </el-row>
        <el-row>
             <hot title=" 最近访问:" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
    data(){
       return{
           hotlist:[ ],
           rencentList:[ ],
       }
    },
    created(){
        api.getHotCity().then(res =>{
             this.hotlist = res.data.data.map((item)=>item.name)
        });
        api.getRecentCity().then(res =>{
            this.rencentList = res.data.data.map((item)=>item.name)
        });
    },
  components:{
      Province,
      Hot,
      category,
  }
}
</script>