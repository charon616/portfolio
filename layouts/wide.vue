<template>
  <div>
    <nuxt />
    <CursorComponent />
  </div>
</template>

<script>
import CursorComponent from '~/components/CursorComponent.vue';
export default {
  components: {
    CursorComponent,
  }
}
</script>

<style lang="stylus" scoped>
</style>
