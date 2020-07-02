<template>
  <div class="ac_header">
    张奥博真帅
    <div class='tolist3' v-if="one" @click="gotop">
      <i class="el-icon-top"></i>
    </div>
    <router-link to='/' v-if="two" class='tolist'>
      <i class="el-icon-house"></i>
    </router-link>
    <div class='tolist2' v-if="three" @click="showfloor">
      <i class="el-icon-tickets"></i>
    </div>
    <ul class="floor" v-if="isfloor">
      <li><a href="#one">单选</a></li>
      <li><a href="#two">多选</a></li>
      <li><a href="#three">判断</a></li>
      <li><a href="#four">不定</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props:{
    shownum:{}
  },
  data () {
    return {
      msg: '',
      isfloor:false,
      one:false,
      two:false,
      three:false
    }
  },
  created () {
    if(this._props.shownum == 0){
      this.one = false;
      this.two = false;
      this.three = false;
    }else if(this._props.shownum == 2){
      this.one = true;
      this.two = true;
      this.three = false;
    }else if(this._props.shownum == 3){
      this.one = true;
      this.two = true;
      this.three = true;
    }
  },
  methods:{
    gotop(){
       var timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        this.isTop = true;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    },
    showfloor(){
      this.isfloor = !this.isfloor;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ac_header{
  width:100%;
  height: 70px;
  font-size: 18px;
  color:#fff;
  position: relative;
  line-height:70px;
  background-color: #333;
  margin-top: 80px;
}
.tolist{
  width: 35px;
  height: 35px;
  position: fixed;
  bottom: 50px;
  right: 10px;
  border: 1px solid #666;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(255, 255, 255,.5)
}
.tolist2,.tolist3{
  width: 35px;
  height: 35px;
  position: fixed;
  right: 10px;
  border: 1px solid #666;
  color: #666;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background:rgba(255, 255, 255,.5)
}
.tolist2{
  bottom: 100px;
}
.tolist3{
  bottom: 150px;
}
.tolist i,.tolist2 i{
  color:#666;
  font-size:20px;
  height: 18px;
  overflow: hidden;
}
.floor{
    height: 200px;
    width: 60px;
    position: fixed;
    right: 50px;
    border: 1px solid #666;
    color: #666;
    display: flex;
    bottom: 82px;
    flex-direction: column;
    padding: 0;
    border-radius: 10px;
    list-style: none;
    background:rgba(255, 255, 255,.5)
}
.floor li{
  height: 45px;
}
.floor a{
  text-decoration: none;
  color: #666;
}
</style>