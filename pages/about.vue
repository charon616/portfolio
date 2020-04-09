<template lang="pug">
.container
  #page-wrap
    .main-content#about
      h2.page-title ABOUT

      .profile-illust
        img(src="~assets/photo/DSC01678.JPG")
      
      .text-box
        h3 KIHO Karin
        h4 キホウ カリン
        p.space Designer | Engineer
        p 1996.6.16
        p.space 東京大学大学院 学際情報学府 学際情報学専攻
        | 先端表現情報学コース 苗村研究室所属

        p.space
          span 卒業論文
          |  「ユーザの読み順を考慮したスマートフォンでの雑誌閲覧の負荷を低減する表示手法」

        p.space
          span Design
          |  グラフィック全般。特にエディトリアル、UI。
        p
          span Programming
          |  C++、Python、Unity、Webフロント系言語など。
        p
          span Research
          |  HCI、視線計測、デザインツールなど。

        p.space karinkiho616 [at] g.ecc.u-tokyo.ac.jp
        a.btn-facebook.space(style="margin-right: 8px;" href="https://www.facebook.com/karinkiho" target="_blank" rel="noopener noreferrer" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          font-awesome-icon(:icon="['fab', 'facebook']")
        a.btn-instagram.space(href="https://www.instagram.com/june_giraffe/?hl=ja" target="_blank" rel="noopener noreferrer" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          font-awesome-icon(:icon="['fab', 'instagram']")
        a.btn-pinterest.space(href="https://pin.it/z3obxmhah4juvm" role="button" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          font-awesome-icon(:icon="['fab', 'pinterest']")
        a.simple-link(href="https://gifmagazine.net/users/71554/profile?locale=ja" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave") GIF MAGAZINE
        a.simple-link(href="https://booklog.jp/users/tsukune6" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave") ブクログ

        //- BarChart.chart

</template>
<script>
import BarChart from '~/components/chart.vue'

export default {
  components: {
    BarChart
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
  mounted() {
    Typekit.load({async: true})
  }
}
</script>

<style scoped lang="stylus">
// .chart
//   // height 300px

.container
  background-color bg-color

.simple-link
  display block
  text-decoration underline
  &:hover
    color accent-color

.profile-illust
  width 100%
  height 180px
  margin 0 auto 
  img
    width 100%
    height 100%
    object-fit cover
    overflow hidden

.main-content
  margin-top 0
  margin-bottom 64px
  line-height 1.75

.text-box
  font-family 'Lato', 'Source Sans Pro', a-otf-gothic-bbb-pr6n, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif
  font-weight 400
  font-style normal
  width 60%
  margin 24px auto

  h3
    font-size 1.6em
    font-weight normal
    letter-spacing .1em
    margin-bottom -6px  
  h4
    letter-spacing .1em
  span
    font-size 0.8em 
    font-weight bold
    padding 4px
    background sub-color
    color white
    border-radius 2px

.space
  margin-top 12px

btn-sns(arg)
  font-size 1.8em
  transition all .3s ease-out
  margin-right 12px
  &:hover
    color arg

.btn-instagram
  btn-sns(#CF2E92)
  margin-left 4px

.btn-facebook
  btn-sns(#1877f2)

.btn-pinterest
  btn-sns(#E60023)
  // margin-left 6px

+sp()
  .profile-illust
    height 120px
  .text-box
    width 90%
    margin 18px auto 0
    span
      display block
      background none
      color sub-color
      border-bottom 1px solid sub-color
      border-radius 0
      padding 4px 0 0 
  br
    line-height 2
  .space
    margin-top 8px

</style>
