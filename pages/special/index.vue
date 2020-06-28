<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title SPECIAL

      .special
        p(style="display: block; width: 100%; text-align: center; margin-bottom: 32px;") いろんな実装を試したり自己紹介したりする場所。
        nuxt-link.special__link(to="/special/article" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
          img.special__link__img(src="~assets/special/logo.jpg" alt="logo.jpg")
        nuxt-link.special__link(to="/special/book" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
          img.special__link__img(src="~assets/special/book.jpg" alt="book.jpg")
        nuxt-link.special__link(to="/special/self" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
          img.special__link__img(src="~assets/special/self.jpg" alt="self.jpg")
        a.special__link(href="https://great-fan-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          img.special__link__img(src="~assets/special/fan.jpg" alt="fan.jpg")

      Lottie.svganimation(:options="defaultOptions" :height="300" :width="300" v-on:animCreated="handleAnimation")

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis';
import Lottie from "~/components/lottie.vue";
import * as animationData from "~/assets/animation/305-loader-5.json";

export default {
  components: {
    KinesisContainer, 
    KinesisElement,
    Lottie
  },
  methods: {
    mouseover: function(){ 
      let stalker = document.getElementById('cursor-stalker');
      stalker.classList.add('hov_');
    },
    mouseleave: function(){
      let stalker = document.getElementById('cursor-stalker');
      stalker.classList.remove('hov_');
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  },
  data(){
    return{
      defaultOptions: { animationData: animationData },
      animationSpeed: 2
    }
  }
}
</script>
<style scoped lang="stylus">

.main-content
  margin-top 0
  margin-bottom 64px
  line-height 1.75

.special
  display flex
  flex-wrap wrap
  -webkit-justify-content center
  justify-content center
  -webkit-align-items center
  align-items center
  p
    text-align left
  &__link
    width calc(100%/6)
    height auto
    position relative
    overflow hidden
    display block
    border-radius radius-size
    &__img
      width 100%
      height 100%
      padding 8px
      object-fit cover
      box-sizing border-box
      border-radius "calc(%s * 4)" % radius-size
      position relative

main-content-width = 100vw
+tb()
  .special
    width 100%
    &__link
      width "calc(%s / 2)" % main-content-width
  .svganimation
    width 200px

</style>