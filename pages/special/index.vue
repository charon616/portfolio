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
        //- nuxt-link.special__link(to="/special/self" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
        //-   img.special__link__img(src="~assets/special/self.jpg" alt="self.jpg")
      .special
        nuxt-link.special__link(to="/special/color" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
          img.special__link__img(src="~assets/special/color.png" alt="self.jpg")
        //- nuxt-link.special__link(to="/special/zircle" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave")
        //-   img.special__link__img(src="~assets/special/color.png" alt="self.jpg")
        a.special__link(href="https://great-fan-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          img.special__link__img(src="~assets/special/fan.jpg" alt="fan.jpg")

      Lottie.svganimation(:options="defaultOptions" :height="300" :width="300" v-on:animCreated="handleAnimation")

      //- .slider
      //-   vue-slider(v-model="value" :rail-style="{ backgroundColor:'pink', borderColor: 'pink' }")

      //- h2(:style="{'color':color}") カバの樹
      //- swatches(v-model="color")

      //- .annotation(:key="annotations.type")
      //-   .annotation-inner
      //-     h3
      //-       rough-notation(
      //-         :type="annotations.type"
      //-         :color="annotations.color"
      //-         :is-show="annotations.show"
      //-       ) {{ annotations.content.title }}
      //-     p {{ annotations.content.p1 }} {{ ' ' }}
      //-       rough-notation(
      //-         :type="annotations.type"
      //-         :color="annotations.color"
      //-         :is-show="annotations.show"
      //-       ) {{ annotations.content.draw }} {{ '' }} {{ annotations.content.p2 }}
      //-     button(@click="annotations.show = !annotations.show") annotate
      </div>
    </div>

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis';
import Lottie from "~/components/lottie.vue";
import * as animationData from "~/assets/animation/305-loader-5.json";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'
import Swatches from 'vue-swatches'
import VueRoughNotation from 'vue-rough-notation';

export default {
  components: {
    KinesisContainer, 
    KinesisElement,
    Lottie,
    // VueSlider,
    // Swatches,
    // VueRoughNotation
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
      animationSpeed: 2,
      value: 0,
      color: '#1CA085',
      annotations: 
        {
          show: false,
          type: "underline",
          color: "#b71c1c",
          content: {
            title: "underline",
            p1: "Create a sketchy",
            draw: "underline",
            p2: "below an element."
          }
        }
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

.slider 
  margin 0 auto
  width 600px

main-content-width = 100vw
+tb()
  .special
    width 100%
    &__link
      width "calc(%s / 2)" % main-content-width
  .svganimation
    width 200px

</style>