<template>
  <div class="ac_detail">
    <Header></Header>
    <div class="now">剩余时间:{{countDownList}}分钟</div>
    <h3>一、单选，每小题1分</h3>
    <el-card class="box-card" v-for="(item,i) in qa" :key="i">
        <div slot="header" class="clearfix">
          {{i+1}}.<span>{{item.title}}</span>
        </div>
        <div v-for="(inlist,l) in item.answer" :key="l" class="text">
          <div @click="answer(1,i,l)" :class="{addbgone:item.thechoice == l}">
            {{inlist}}
          </div>
        </div>
        <div class="footer" v-if="ishow"> 
          <p>正确答案:<br>{{item.answer[item.correct]}}</p>
          <p>答案解析:<br>{{item.analysis}}</p>
          <p>相关链接:<br><a :href="item.link">点击跳转</a></p>
        </div>
    </el-card>
    <h3>二、多选，每小题2分</h3>
    <el-card class="box-card" v-for="(item,i) in qa2" :key="i+'one'">
        <div slot="header" class="clearfix">
          {{i+1}}.<span>{{item.title}}</span>
        </div>
        <div v-for="(inlist,l) in item.answer" :key="l" class="text">
          <div @click="answer2(i,l)" :ref="'addbg'+i+l" class="addbglist">
            {{inlist}}
          </div>
        </div>
        <div class="footer" v-if="ishow"> 
          <p>正确答案:<br>
            <span :key="j" v-for="(item2,j) in item.correct">{{item.answer[item2]}}</span>
          </p>
          <p>答案解析:<br>{{item.analysis}}</p>
          <p>相关链接:<br><a :href="item.link">点击跳转</a></p>
        </div>
    </el-card> <h3>一、判断题，每小题1分</h3>
    <el-card class="box-card" v-for="(item,i) in qa3" :key="i+'three'">
        <div slot="header" class="clearfix">
          {{i+1}}.<span>{{item.title}}</span>
        </div>
        <div v-for="(inlist,l) in item.answer" :key="l" class="text">
          <div @click="answer(2,i,l)" :class="{addbgone:item.thechoice == l}">
            {{inlist}}
          </div>
        </div>
        <div class="footer" v-if="ishow"> 
          <p>正确答案:<br>{{item.answer[item.correct]}}</p>
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
      qa2:[],   
      qa3:[],
      surenum:0,
      countDownList:0,
      ishow:false
    }
  },
  created (){
    let id = this._routerRoot._route.query.id;
    //单选选中值样式
    subject[id][0].Singlechoice.forEach(function(item) {
      item.thechoice = null;
    })
    //单选值记录
    subject[id][0].Singlechoice.forEach(function(item) {
      item.history = null;
    })   
    //判断选中值样式
    subject[id][2].judge.forEach(function(item) {
      item.thechoice = null;
    })
    //判断值记录
    subject[id][2].judge.forEach(function(item) {
      item.history = null;
    })
    //多选值记录
    subject[id][1].Multiplechoice.forEach(function(item) {
      item.option = [];
    })
    this.qa = subject[id][0].Singlechoice;
    this.qa2 = subject[id][1].Multiplechoice;
    this.qa3 = subject[id][2].judge;
    //数组删除值
    Array.prototype.delete = function(val) {
      var index = this.indexOf(val);
      if (index > -1) {
        this.splice(index, 1);
      }
    }
    //倒计时
    var i=7200000;
    const updateTime = () => {
      if(i<=0){
        clearInterval(time);
        this.ishow = true;
      }
      i-=1000;
      this.countDownList = Math.round(i/1000/60);
    };
    let time = setInterval(updateTime,1000);
  },
  methods:{
    //单选
    answer(num,i,l){
      //背景选择切换
      if(num == 1){
        this.qa[i].thechoice = l;
        this.qa[i].history = l;
      }else{
        this.qa3[i].thechoice = l;
        this.qa3[i].history = l;
      }
    },
    //多选选择项目
    answer2(i,l){
      //背景选择切换
      if(this.$refs[`addbg${i}${l}`][0].style.color == 'rgb(255, 255, 255)'){
        this.$refs[`addbg${i}${l}`][0].style.color = '#303133';
        this.$refs[`addbg${i}${l}`][0].style.background = '#fff';
        this.qa2[i].option.delete(l);
      }else{
        this.$refs[`addbg${i}${l}`][0].style.color = 'rgb(255, 255, 255)';
        this.$refs[`addbg${i}${l}`][0].style.background = '#999';
        this.qa2[i].option.push(l);
      }
      console.log(this.qa2[i].option)
    },
    //多选确认
    sure(i){
      if(this.qa2[i].correct.toString() == this.qa2[i].option.sort().toString()){
          this.$message({
            message: '刘爽厉害啊！',
            type: 'success'
          });
          this.surenum+=2;
      }else{
        this.$message.error('加油啊刘爽！');
      }
      this.qa2[i].ishow = true;
    },
    endbtn(){
      let _this = this;
      //单选计分
      _this.qa.forEach(function(item){
        if(item.correct == item.history){
          _this.surenum+=1
        }
      })
      //多选计分
      _this.qa2.forEach(function(item){
        if(item.correct.toString() == item.option.sort().toString()){
          _this.surenum+=2
        }
      })
      //判断计分
      _this.qa3.forEach(function(item){
        if(item.correct == item.history){
          _this.surenum+=1
        }
      })
      _this.$message({
        message: '恭喜刘爽同学获得'+_this.surenum+"分",
        type: 'success'
      });
      _this.ishow = true; 
    }
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
</style>