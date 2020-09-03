<template>
  <div class="MemoryFlow">
    <Header></Header>
    <el-collapse v-model="activeNames" class="list">
      <el-collapse-item title="第一章 法律常识" name="1">
        <el-collapse v-model="activeNamesOne">
          <el-collapse-item title="第一节 宪法" name="1">
            <!-- 树形图 -->
            <el-tree 
              :data="data1" 
              default-expand-all
              :props="defaultProps" 
              @node-click="handleNodeClick"></el-tree>
            <div v-for="(node,index) in text1" :key="index">
              <!-- 详细内容 -->
              <div v-html="node.text" :id="node.id"></div>
              <!-- 相关题目 -->
              <el-card class="box-card" v-for="(item,i) in node.test" :key="i">
                <div slot="header" class="clearfix">
                  {{i+1}}.<span>{{item.title}}</span>
                </div>
                <div v-for="(inlist,l) in item.answer" :key="l" class="text">
                  <div @click="answer(index,i,l)" :class="{addbgone:item.thechoice == l}">
                    {{inlist}}
                  </div>
                </div>
                <div class="footer" v-if="item.isShow"> 
                  <p>正确答案:<br>{{item.answer[item.correct]}}</p>
                  <p>答案解析:<br>{{item.analysis}}</p>
                  <p>相关链接:<br><a :href="item.link">点击跳转</a></p>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            22222
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            3333
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            44444
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <Footer :shownum="shownum"></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import constitution1 from '@/components/constitution1'

export default {
  name: 'MemoryFlow',
  components:{
    Header,Footer
  },
  data () {
    return {
      msg: '',
      shownum:2,
      activeNames: ['1'],
      activeNamesOne: ['1'],
      data1: [],
      text1: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
    this.data1 = constitution1.data
    this.text1 = constitution1.node
    //单选选中值样式
    this.text1.forEach(function(item) {
      try {
        item.test.forEach(function (node) {
          node.thechoice = null;
          node.isShow = false;
        })
      } catch (err) {
        console.log(err)
      }
    })
    let thestring = constitution1.node
    console.log(thestring)
    thestring.forEach(function (item) {
      try {
        item.matching.forEach(function (node) {
          item.text = item.text.replace(eval(`/${node.text}/g`), `<span style="${node.style}">${node.text}</span>`)
        })
      } catch (err) {
        console.log(err)
      }
    })
    this.$forceUpdate()
    this.text1 = thestring
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
      document.querySelector(`#id${data.id}`).scrollIntoView(true);
    },
    answer(index,i,l){
      this.text1[index].test[i].thechoice = l;
      this.text1[index].test[i].isShow = true;
      this.$forceUpdate()
      console.log(this.text1)
    }
  }
}
</script>
<style scoped>
  .MemoryFlow .list {
    text-align: left;
    padding: 10px;
  }
  .addbgone{
    color:rgb(255, 255, 255);
    background:#999999;
  }
</style>