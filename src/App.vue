<template>
  <div id="app">

    <title-bar/>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue'

export default {
  name: 'Home',
  components: {
    TitleBar
  }
}

</script>
