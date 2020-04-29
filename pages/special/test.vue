<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title SPECIAL
      #app
        button#btn(v-on:click="omikuji") ボタン
        ._ {{result}}
      
      //- img.test(src="~/assets/special/test0.png")

      .main
        h1.main__txt(v-parallax="0.2") parallaxテスト
        img.main__img(src="~/assets/special/test1.png" v-parallax="0.5" alt="test1.png")

      img(src="~/assets/special/test0.png" alt="test0.png")

      //- h2 tets
      //- kinesis-container(event="scroll")
      //-   kinesis-element( :strength="100" originX="50")
      //-     h2 tets
      //-     img(src="~/assets/special/test0.png")
      
      section(v-scroll-reveal.reset)
        h1 Tada!
      section(v-scroll-reveal.reset="{ delay: 250 }")
        h1 Slightly late tada!
      


</template>
<script>
import VueScrollReveal from 'vue-scroll-reveal';
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {
  components: {
      KinesisContainer, 
      KinesisElement,
      VueScrollReveal
  },
  data() {
      return{
          result:"ボタンを押すとここにおみくじの結果が出るよ",
          omikujiResult:["大吉","中吉","小吉","凶"]
      }
  },
  methods: {
      omikuji: function(){
          const num = Math.floor(Math.random()*this.omikujiResult.length);
          this.result = this.omikujiResult[num];
      }

  }
}
</script>
<style scoped lang="stylus">

.main-content 
  margin-top 0
  text-align center
  line-height 1.75

.test
  display flex
  align-items center
  justify-content center
  // margin-top 80vh
  height 500px
  z-index 0
  position fixed
  top 0
  left 0
  // top 40vh
  // left 50%
  // transform translateX(-50%)

.main 
  display flex
  align-items center
  justify-content center
  height 500px
  overflow hidden
  margin-top 80vh
  margin-bottom 100vh
  position relative
  z-index 1
  &__img
    z-index 0
    transition all .5s ease-out
  &__txt
    z-index 5 
    color deeppink 
    position absolute
    top 0
    left 50%
    transform translateX(-50%)
    transition all .5s ease-out

section 
  height 100vh

</style>