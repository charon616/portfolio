<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title 紙版ポートフォリオ
      p.plane-txt 2020年2月に作成したものです。


      flipbook.flipbook(:pages="images" v-slot="flipbook")
        button.button(@click="flipbook.flipLeft" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :class="{ invalid: flipbook.page == 1}") 
          font-awesome-icon.icon(:icon="['fas', 'arrow-left']")
        button.button(@click="flipbook.zoomIn" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :class="{ invalid: !flipbook.canZoomIn }")
          font-awesome-icon.icon(:icon="['fa', 'search-plus']")
        span.num {{ flipbook.page }} / {{ flipbook.numPages }}
        button.button(@click="flipbook.zoomOut" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :class="{ invalid: !flipbook.canZoomOut }") 
          font-awesome-icon.icon(:icon="['fa', 'search-minus']")
        button.button(@click="flipbook.flipRight" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :class="{ invalid: flipbook.page == flipbook.numPages }") 
          font-awesome-icon.icon(:icon="['fas', 'arrow-right']")
      
      //- button.button(@click="openModal") モーダルを開くよ
      //- MyModal(@close="closeModal" v-if="modal")

      
      nuxt-link.link-button(aria-label="special" to="/special" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave") ←　戻る

</template>
<script>
import Flipbook from 'flipbook-vue'

export default {
  layout: 'wide',
  components: {
    Flipbook,
  },
  data() {
    return {
      // modal: false,
      message: '',
      images: [
        "/paper/page1.jpg",
        "/paper/page2.png",
        "/paper/page3.png",
        "/paper/page4.png",
        "/paper/page5.png",
        "/paper/page6.png",
        "/paper/page7.png",
        "/paper/page8.png",
        "/paper/page9.png",
        "/paper/page10.png",
        "/paper/page11.png",
        "/paper/page12.png",
        "/paper/page13.png",
        "/paper/page14.png",
        "/paper/page15.png",
        "/paper/page16.png",
        "/paper/page17.jpg",
      ]
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
    }
  }
}
</script>
<style scoped lang="stylus">
.container
  background sub-color
  width 100%
  
.flipbook 
  width 90vw
  height 90vh
  margin 0 auto

.bounding-box
  box-shadow 0px 0px 20px #000
.flipbook.bounding-box
  box-shadow 4px 4px 20px #000

.num
  color white
  margin 0 8px

.button
  width 48px
  height 48px
  background main-color 
  color sub-color
  border-radius 50%
  border none
  outline none
  margin 8px
  .icon
    font-size 2em
  &.invalid
    filter brightness(40%)
    -webkit-filter brightness(40%)
    -moz-filter brightness(40%)
    -o-filter brightness(40%)
    -ms-filter brightness(40%)

.modal-area-inner
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  overflow-y auto
  visibility hidden
  opacity 0
  z-index -1
  &.is-open 
    visibility visible
    opacity 1
    z-index 100 

#page-wrap
  margin 0 auto

.plane-txt 
  text-align center
  font-size 1.2em
  color bg-color

.main-content 
  margin-top 0 
  margin-bottom 64px
  line-height 2.0
  text-align center

.page-title
  width 360px
  color bg-color
  &::before
    border-left solid 3px bg-color
    border-top solid 3px bg-color

  &::after 
    border-right solid 3px bg-color
    border-bottom solid 3px bg-color

.link-button
  margin-top 80px
  width 50%
  padding 16px
  color bg-color
  border 2px solid bg-color

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