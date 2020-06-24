<template>
  <div class="ac_detail">
    <Header></Header>
    <el-card class="box-card" v-for="(item,i) in qa" :key="i">
      <div slot="header" class="clearfix">
        <span>{{item.title}}</span>
      </div>
      <div v-for="(inlist,l) in item.answer" :key="l" class="text">
        {{inlist}}
      </div>
    </el-card>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import subject from '../assets/data/subject.js'
export default {
  name: 'Detail',
  components:{
    Header,Footer
  },
  data () {
    return {
      qa:[]
    }
  },
  created (){
    let id = this._routerRoot._route.query.id;
    this.qa = subject[id];
    console.log(subject[id])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card{
  margin-top:40px;
}
.text{
  line-height:30px;
}
</style>