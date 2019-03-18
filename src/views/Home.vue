<template>
    <div class="home">
        <Vheader></Vheader>
        <Vslider></Vslider>
        <router-view></router-view>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import Vslider from '@/components/Vslider.vue'
export default {
  name: 'home',
  components: {
    Vheader,
    Vslider
  }
}
</script>

<style scoped>
</style>
