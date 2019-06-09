<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <video-player/>
    <img alt="My photo" src="https://st4.depositphotos.com/16887462/23857/i/1600/depositphotos_238574794-stock-photo-city-streets-dusk-seen-aerial.jpg">
    <img alt="My photo" src="https://st2.depositphotos.com/1705215/7253/i/950/depositphotos_72531667-stock-photo-large-family-car-skoda-superb.jpg">
    <img alt="My photo" src="https://static9.depositphotos.com/1086013/1149/i/950/depositphotos_11497591-stock-photo-superb-backyard.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    VideoPlayer
  }
}
</script>
<style>
  img{
    margin: 10px;
    width: 200px;
    height: auto;
  }

</style>
