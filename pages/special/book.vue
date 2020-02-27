<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title 本を読む
      p.plane-txt いずれやります。

      //- iframe(src="https://s3-ap-northeast-1.amazonaws.com/cdn.aprico-media.com/resources/sample.pdf" width="100%" height="800px")
      //-   p
      //-     b 表示されない時の表示
      //-     |:
      //-     a(href="https://s3-ap-northeast-1.amazonaws.com/cdn.aprico-media.com/resources/sample.pdf") PDF をダウンロード
      //-     |.
      //- iframe(src="https://drive.google.com/open?id=1mHAGoeKvHyoGsM_pLR3brp9OrfMf0TGd" width="100%" height="800px")
      //-   p
      //-     b 表示されない時の表示
      //-     |:
      //-     a(href="https://drive.google.com/open?id=1mHAGoeKvHyoGsM_pLR3brp9OrfMf0TGd") PDF をダウンロード
      //-     |.
      
      nuxt-link.link-button(to="/special" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave") ←　戻る

</template>
<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
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
  },
  data() {
    return {
      pdfLink: "https://s3-ap-northeast-1.amazonaws.com/cdn.aprico-media.com/resources/sample.pdf",
      link: '../../assets/an1.pdf', 
    }
  }

}
</script>
<style scoped lang="stylus">

.plane-txt 
  text-align center
  font-size 1.2em

.container
  background-color bg-color

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