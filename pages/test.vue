<template lang="pug">
.container
  h1.red Hello {{ name }}!
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return{
      name: "John"
    }
  }
  
})
</script>

<style lang="stylus">
.container
    background-color red
    height 100vh
    display flex
    align-items center
    justify-content center
.red
    color #fff
</style>