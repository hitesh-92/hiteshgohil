<template>
  <v-app id="app">    
    <Navbar />
    
    <v-content id="content" class="white">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  #app{
    font-family:'Ubuntu', serif;
    font-size: 1.1rem
  }
</style>
