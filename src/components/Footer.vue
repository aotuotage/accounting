<template>
  <div class="ac_header">
    张奥博真帅
    <router-link to='/' class='tolist'>
      <i class="el-icon-s-fold"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: ''
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
}
.tolist i{
  color:#666;
  font-size:20px;
  height: 18px;
  overflow: hidden;
}
</style>