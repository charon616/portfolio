<template>
  <div>
    <Menu />
    <nuxt />
    <CursorComponent />
  </div>
</template>

<script>
import Menu from '~/components/TheMenu.vue';
import CursorComponent from '~/components/CursorComponent.vue';
export default {
    components: {
      CursorComponent,
      Menu
    }
}
</script>

<style>
</style>
