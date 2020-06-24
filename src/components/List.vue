<template>
  <div class="ac_list">
    <Header></Header>
    <ul>
      <li v-bind:key="index" v-for="(item,index) in list"><a href="">{{item}}</a></li>
    </ul>
  </div>
</template>
<script>
import Header from '@/components/Header'
import list from '../assets/data/list.js' // 引入
export default {
  name: 'List',
  components:{
    Header
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = list.list
    console.log(list)
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
  border-bottom: 1px solid #999;
}
.ac_list ul li a{
  line-height:40px;
  color: #333;
  font-size: 18px;
  text-decoration: none;
}
</style>
