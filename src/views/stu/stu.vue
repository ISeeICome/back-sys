<template>
    <div class="home">
        <Vheader></Vheader>
        <stuVslider></stuVslider>
        <router-view></router-view>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import stuVslider from '@/components/stuVslider.vue'
export default {
  name: 'home',
  components: {
    Vheader,
    stuVslider
  }
}
</script>

<style scoped>
</style>
