<template lang="pug">
.container
  #page-wrap(:style="{ background: rgbs[0]}")
    .main-content#special
      h2.page-title(:style="{ color: txtclr}") COLOR

      .special
        .zone
          swiper.swiper(:options="swiperOption" @slideChange="urlchange" ref='mySwiper')
            swiper-slide.swiper__slide(v-for='(link, index) in urls' :key='index')
              img(:src="link" :alt="link")
            .swiper-pagination(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" slot="pagination")
            .swiper-button-prev.swiper-button-white.swiper-custom-button(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" slot="button-prev")
            .swiper-button-next.swiper-button-white.swiper-custom-button(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" slot="button-next")
          ul.color
            li(v-for="(rgb, id) in rgbs" :key="id" :style="{ background: rgb}") 
          .textbox(:style="{ color: txtclr}")
            h3 いい感じの色になるように
            p 抽出したカラーパレットを元にして
            p 文章の色を変えてみてます
            p 実装には
            p node-vibrantというパッケージを使いました

      nuxt-link.link-button(aria-label="special" to="/special" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave") ←　戻る
    

</template>
<script>
import Vibrant from 'node-vibrant';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    Vibrant,
    swiper, 
    swiperSlide
  },
  data(){
    return{
      clr: [],
      rgbs: [],
      txtclr: "#000",
      urls: ["/work/work1.jpg", "/work/work2.jpg", "/work/work3.jpg", "/work/work4.jpg",
            "/work/work5.jpg", "/work/work6.jpg", "/work/work7.jpg", "/work/work8.jpg",
            "/work/work9.jpg", "/work/work10.jpg", "/work/work11.jpg", "/work/work12.jpg",
            "/work/work14-2.jpg", "/work/work15-2.png", "/work/work16-2.png", "/work/work17-2.png",
            "/work/work18-2.png", "/work/work19-2.png", "/work/work20-2.png", "/work/work21-2.png",
            "/work/work22-2.png", "/work/work23.png", "/work/work24.jpg", "/work/work25.jpg",
            "/work/work26.png", "/work/work27.jpg", "/work/work28.jpg", "/work/work29.jpg",
            "/work/work30.jpg", "/work/work31.jpg", "/work/work32.png", "/work/work33.png",
            "/work/work34.png"],
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  watch: {
    clr: function(val){ 
      let arr = [] 
      for (let i=0; i < val.length; i++){
        let rgb = 'rgb(' + val[i][0] + ',' + val[i][1] + ',' + val[i][2] + ')'
        arr.push(rgb)
        this.rgbs = arr
      }

      const limit_min = 2.0

      for (let j=1; j < val.length; j++){
        let cont = this.calcContrast(val[0], val[j])
        if(cont >= limit_min){
          this.txtclr = this.rgbs[j]
          break
        }
        this.txtclr = "#fff"
      }
    }
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
    getcolor: function (url) {
      let self = this
      Vibrant.from(url).getPalette()
        .then(function (palette) {
          let arr = Object.keys(palette).map(function (key) {
            return palette[key]._rgb
          })
          self.clr = arr
          self.txtclr = palette.Vibrant.getBodyTextColor()
        });
    },
    urlchange: function(){
      let idx = this.getActiveIndex(this.$refs.mySwiper.swiper)
      this.getcolor(this.urls[idx])
    },
    getActiveIndex: (swiper) =>{
      return swiper.realIndex
    },
    luminanace: function(r, g, b){
      r /= 255
      g /= 255
      b /= 255
      if(r <= 0.03928){
        r /= 12.92
      }else{
        r = Math.pow((r + 0.055) / 1.055, 2.4)
      }
      return r * 0.2126 + g * 0.7152 + b * 0.0722
    },
    calcContrast: function(rgb1, rgb2){
      const lum1 = this.luminanace(rgb1[0], rgb1[1], rgb1[2])
      const lum2 = this.luminanace(rgb2[0], rgb2[1], rgb2[2])
      const brightest = Math.max(lum1, lum2)
      const darkest = Math.min(lum1, lum2)
      return (brightest + 0.05) / (darkest + 0.05)
    }
  },
  mounted(){
    this.getcolor(this.urls[0])
  }
}
</script>
<style scoped lang="stylus">
#page-wrap, .textbox, .page-title
  width 100%
  transition .6s all main-transition
  z-index 0
.main-content
  margin-top 0
  margin-bottom 64px
  line-height 1.75
  text-align center

.page-title::before, .page-title::after
  display none

.special
  display flex
  flex-direction column
  -webkit-justify-content center
  justify-content center
  -webkit-align-items center
  align-items center
  .color 
    list-style none
    display flex
    flex-direction row
    -webkit-justify-content center
    justify-content center
    -webkit-align-items center
    align-items center
    background #fff
    border-radius 16px
    margin 0 16px
    padding 16px
    li
      width 40px
      height 40px 
      border-radius 50%
      display block
      margin 16px

.zone
  display float
  .textbox
    width 400px
    height 400px
    margin 16px 0
    float left
    text-align left
.swiper
  width 640px
  padding 0
  float left
  margin 0 16px 0 0
  &__slide
    width 100%
    img
      width 100%
      height auto

.link-button
  width 50%
  padding 16px
  color bg-color
  border 2px solid bg-color

+tb()
  .special
    .color 
      margin 0
      padding 16px 0
      li
        width 32px
        height 32px
        margin 8px

  .zone 
    display initial
    .textbox
      float initial 
      width 100%
      height auto
    .swiper
      float initial
      width 640px

+sp()
  .special
    .color 
      width calc(100vw - 32px)
  .zone 
    .swiper
      float initial
      width calc(100vw - 32px)
  .swiper-pagination
    display none



</style>