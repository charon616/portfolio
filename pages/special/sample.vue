<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title 端末の傾きを取得
      p.plane-txt value: {{value}}
</template>

<script>
import { createComponent, ref } from '@vue/composition-api';
import { useDeviceLight } from "vue-use-web";

export default createComponent({
  setup() {
    const { value } = useDeviceLight();

    return { value };
  }

})
</script>
<style scoped lang="stylus">
#page-wrap
  margin 0 auto

.plane-txt 
  text-align center
  font-size 1.2em

.main-content 
  margin-top 0
  margin-bottom 64px
  line-height 2.0
  text-align center

.page-title
  width 360px

.link-button
  margin-top 80px
  width 50%
  padding 16px

+sp()
  .page-title
    width 360px
    max-width 80%

    &__body
      p
        width 400px
      img
        width 100%

</style>
