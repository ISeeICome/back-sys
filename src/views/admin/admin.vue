<template>
    <div class="home">
        <Vheader></Vheader>
        <adminVslider></adminVslider>
        <router-view></router-view>
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
</style>
