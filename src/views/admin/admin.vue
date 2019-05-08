<template>
    <div class="home">
        <Vheader></Vheader>
        <div class="content">
          <adminVslider id = 'slide'></adminVslider>
          <router-view id= 'con'></router-view>
        </div>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import adminVslider from '@/components/adminVslider.vue'
export default {
  name: 'home',
  components: {
    Vheader,
    adminVslider
  }
}
</script>

<style scoped>
.home{
  width:100%;
  min-width: 1500px;
}
.content{
  overflow: hidden;
  width:1500px;
  height:630px;
}
  #slide{
    width:180px;
    height:100%;
    float:left;
    background-color:#293038;
  }
  #con {
    float:left;
    width:1305px;
  }
</style>
