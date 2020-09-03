<template>
  <div class="ac_list">
    <Header></Header>
    <div v-if="ishow">
      <el-card class="box-card" v-for="(item,i) in list" :key="i">
          <div slot="header" class="clearfix">
            {{i+1}}.<span>{{item.title}}</span>
          </div>
          <div v-for="(inlist,l) in item.answer" :key="l" class="text">
            <div @click="answer(1,i,l)" :class="{addbgone:item.thechoice == l}">
              {{inlist}}
            </div>
          </div>
          <div class="footer"> 
            <p>正确答案:<br>{{item.answer[item.correct]}}</p>
            <p>答案解析:<br>{{item.analysis}}</p>
            <p>相关链接:<br><a :href="item.link">点击跳转</a></p>
          </div>
      </el-card>
    </div>
    <div class="nulldata" v-if="!ishow">
      你还没有错题，快去做题吧！
    </div>
    <Footer :shownum="shownum"></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Wrongq',
  components:{
    Header,Footer
  },
  data () {
    return {
      list: [],
      ishow: true,
      shownum:2
    }
  },
  created () {
    let wq = localStorage.getItem('wq');
    if(wq == null) {
      localStorage.setItem('wq', [])
    }
    if(wq == '' || wq == null) {
      this.ishow = false;
      return false;
    }else{
      this.ishow = true;
    }
    let bjwq= JSON.parse(wq);
    this.list = bjwq.wqlistbj;
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.now{
  font-size: 14px;
  color: #ffffff;
  background:#999999;
  position:fixed;
  padding:5px 8px;
  border-radius: 20px;
  top:40px;
  right: 10px;
}
.nulldata{
  font-size: 18px;
  margin-top:30px;
}
.box-card{
  margin-top:40px;
}
.clearfix{
  text-align:left;
}
.text{
  line-height:40px;
  text-align:left;
}
.footer{
  width:100%;
  text-align:left;
  border-top:1px solid #EBEEF5;
  margin-top:30px;
  padding: 15px 5px 0 5px;
}
.endbtn{
  margin-top:40px;
  width:300px;
}
.ziliao-text{
  line-height: 30px;
  text-align: left;
  padding:20px;
}
.surebtn{
  margin-top:20px;
}
.addbglist{
  margin-top: 5px;
}
.addbgone{
  color:rgb(255, 255, 255);
  background:#999999;
}
.Totalscore{
  margin-top:40px;
  font-size:24px;
  color: #67c23a;
}
</style>
