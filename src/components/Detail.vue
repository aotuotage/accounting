<template>
  <div class="ac_detail">
    <Header></Header>
    <el-card class="box-card" v-for="(item,i) in qa" :key="i">
        <div slot="header" class="clearfix">
          {{i+1}}.<span>{{item.title}}</span>
        </div>
        <div v-for="(inlist,l) in item.answer" :key="l" class="text">
          <div @click="answer(i,l)">
          {{inlist}}
          </div>
        </div>
        <div class="footer" v-if="item.ishow"> 
          <p>答案解析:<br>{{item.analysis}}</p>
          <p>相关链接:<br><a :href="item.link">点击跳转</a></p>
        </div>
    </el-card>
    <el-button type="primary" @click="endbtn" class="endbtn">交卷</el-button>
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
      qa:[],
      surenum:0
    }
  },
  created (){
    let id = this._routerRoot._route.query.id;
    subject[id].forEach(function(item) {
      item.ishow = false;
    })
    this.qa = subject[id];
    console.log(subject[id])
  },
  methods:{
    answer(i,l){
      if(this.qa[i].ishow == false){
        if(this.qa[i].correct == l){
          this.$message({
            message: '刘爽厉害啊！',
            type: 'success'
          });
          this.surenum+=1;
        }else{
          this.$message.error('加油啊刘爽！');
        }
        this.qa[i].ishow = true;
      }else{        
        this.$message.error('亲，不要重复选择哦！');
      }
    },
    endbtn(){
      let _this = this;
      let ever = 100/_this.qa.length;
      let thisstates = true;
      try{  
        _this.qa.forEach(function(item){
          if(item.ishow == false){
            throw new Error('err')
          }
        });
      }catch(e){
        thisstates = false;
        _this.$message.error('刘爽同学你没有答完哦！');
      }
      if(thisstates){
        let endnum = Math.round(_this.surenum * ever);
        _this.$message({
          message: '恭喜刘爽同学获得'+endnum+"分",
          type: 'success'
        });
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card{
  margin-top:40px;
}
.clearfix{
  text-align:left;
}
.text{
  line-height:40px;
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
</style>