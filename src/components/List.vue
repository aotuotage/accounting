<template>
  <div class="ac_list">
    <Header></Header>
    <ul>
      <li v-bind:key="index" v-for="(item,index) in list">
        <router-link :to="{name:'Detail',query:{id:index}}">{{item}}</router-link>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Detail from '@/components/Detail'
import list from '../assets/data/list.js' // 题目列表
export default {
  name: 'List',
  components:{
    Header,Footer
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = list.list
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ac_list ul{
  list-style: none;
  padding: 0;
  margin: 40px 0 0 0;
}
.ac_list ul li{
  width:100%;
  height: 40px;
  border-bottom: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-top:10px;
}
.ac_list ul li a{
  line-height:40px;
  color: #666;
  font-size: 18px;
  text-decoration: none;
}
</style>
