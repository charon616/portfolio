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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  layout: 'wide',
  components: {
    Vibrant,
    Swiper, 
    SwiperSlide
  },
  data(){
    return{
      clr: [],
      rgbs: [],
      txtclr: "#000",
      urls: ['https://i.scdn.co/image/ab67616d0000b273c19871d095eb70e94b770d2b', 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7', 'https://i.scdn.co/image/ab67616d0000b2737200f2d6b0d0e545d579777a', 'https://i.scdn.co/image/ab67616d0000b273179c168e6a41c4cccf5ff729', 'https://i.scdn.co/image/ab67616d0000b273bd04b16b18f85668ad6521dd', 'https://i.scdn.co/image/ab67616d0000b273f243b66f335b6adceeb8086e', 'https://i.scdn.co/image/ab67616d0000b273c9eb0c8ad063f940bc8e0c59', 'https://i.scdn.co/image/ab67616d0000b273e132c63ecba4b2e7c8c20969', 'https://i.scdn.co/image/ab67616d0000b273ecaa139c5cc7c0bf0be30860', 'https://i.scdn.co/image/ab67616d0000b2730823e0e9d74a78c3f889fa20', 'https://i.scdn.co/image/ab67616d0000b273dd4a6d26627cc697b3f4d8be', 'https://i.scdn.co/image/ab67616d0000b273294229a510d84bea17c67686', 'https://i.scdn.co/image/ab67616d0000b2732c1c2ca69022b02804ee5d96', 'https://i.scdn.co/image/ab67616d0000b273bcaa7b836c692ec994f43831', 'https://i.scdn.co/image/ab67616d0000b2734f37320db40c0fb755d8c71e', 'https://i.scdn.co/image/ab67616d0000b2733481ec62e6bca6a6708e6934', 'https://i.scdn.co/image/ab67616d0000b273217c565f5a8aecb74b5035f9', 'https://i.scdn.co/image/ab67616d0000b273b8785210c437d5a58506827b', 'https://i.scdn.co/image/ab67616d0000b273459f42e97894d7a3031be3a9', 'https://i.scdn.co/image/ab67616d0000b2736a4b681716dacfbc73fe5cd7'],
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
      }
      this.rgbs = arr

      const limit_min = 2.0
      let txtclr = null

      for (let j=1; j < val.length; j++){
        let cont = this.calcContrast(val[0], val[j])
        if(cont >= limit_min){
          txtclr = this.rgbs[j]
          this.txtclr = txtclr
          break
        }
      }

      // 代表色を全て探索してコントラストが閾値以上になる色がなければ白か黒にする
      if(txtclr == null){
        if(this.calcContrast(val[0], [255, 255, 255]) >= limit_min){
          this.txtclr = "#fff"
        }else{
          this.txtclr = "#000"
        }
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
      let idx = this.getActiveIndex(this.$refs.mySwiper.$swiper)
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
  created(){
    this.getcolor(this.urls[0])
  }
}
</script>
<style scoped lang="stylus">
.container
  width 100%
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
  margin-bottom 80px
  .color 
    list-style none
    display flex
    flex-direction row
    -webkit-justify-content center
    justify-content center
    -webkit-align-items center
    align-items center
    margin 0 16px
    li
      width 40px
      height 40px 
      border-radius 50%
      border 1px solid #fff
      display block
      margin 16px
      transition .6s all main-transition

.zone
  display float
  .textbox
    width 400px
    height 400px
    margin 16px
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