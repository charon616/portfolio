<template lang="pug">
.container
  #page-wrap
    .main-content#about
      h2.page-title ABOUT

      //- .profile-illust
      //-   img(src="~assets/photo/name.png" alt="photo")
      
      .text-box
        h3 KIHO Karin
        h4 キホウ カリン
        p.space Designer | Engineer
        p 1996-
        p.space 東京大学大学院 学際情報学府 学際情報学専攻

        p.space
          //- span 卒業論文
          //- |  「ユーザの読み順を考慮したスマートフォンでの雑誌閲覧の負荷を低減する表示手法」

        p.space
          span Design
          |  グラフィック全般。特にエディトリアル、UI。
        p
          span Programming
          |  C++、Python、Unity、Webフロントエンドなど。
        p
          span Research
          |  HCI、視線計測、デザインツールなど。

        p.space
          span.hidden Skill
        .charts
          BarChart.chart(v-for="(skill, index) in skills" :key="index" :name="skill.name" :score="skill.score" :color="skill.color")

        p.space
          span.hidden Link
        //- a.btn-facebook.space(aria-label="open facebook" style="margin-right: 8px;" href="https://www.facebook.com/karinkiho" target="_blank" rel="noopener noreferrer" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
        //-   font-awesome-icon(:icon="['fab', 'facebook']")
        //- a.btn-instagram.space(aria-label="open instagram" href="https://www.instagram.com/june_giraffe/?hl=ja" target="_blank" rel="noopener noreferrer" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
        //-   font-awesome-icon(:icon="['fab', 'instagram']")
        a.btn-twitter.space(aria-label="open twitter" href="https://twitter.com/rin31627234" target="_blank" rel="noopener noreferrer" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          font-awesome-icon(:icon="['fab', 'twitter']")
        a.btn-pinterest.space(aria-label="open pinterest" href="https://pin.it/z3obxmhah4juvm" role="button" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
          font-awesome-icon(:icon="['fab', 'pinterest']")
        a.btn-tumbler.space(aria-label="open tumbler" href="https://charon66.tumblr.com/" role="button" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave") 
          font-awesome-icon(:icon="['fab', 'tumblr']")
        a.simple-link(aria-label="open gifmagazine" href="https://gifmagazine.net/users/71554/profile?locale=ja" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave") GIF MAGAZINE
        a.simple-link(aria-label="open booklog" href="https://booklog.jp/users/tsukune6" target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave") ブクログ 
        
        p.space 
          span Contact
          |  karinkiho616 [at] g.ecc.u-tokyo.ac.jp

</template>
<script>
import BarChart from '~/components/chart.vue'

export default {
  components: {
    BarChart
  },
  data() {
    return {
      skills: [
        {
          name: "Ai",
          score: 90,
          color: "#FA7420"
        },
        {
          name: "Ps",
          score: 65,
          color: "#17B9FA"
        },
        {
          name: "XD",
          score: 70,
          color: "#F900B4"
        },
        {
          name: "Id",
          score: 40,
          color: "#F82385"
        },
        {
          name: "Ae",
          score: 25,
          color: "#5600E0"
        },
        {
          name: "Unity",
          score: 30,
          color: "#000000"
        },
        {
          name: "Python",
          score: 60,
          color: "#FDCD3F"
        },
        {
          name: "C++",
          score: 40,
          color: "#164477"
        },
        {
          name: "Web",
          score: 55,
          color: "#9FC40C"
        },
        {
          name: "Drawing",
          score: 30,
          color: "#6D4E3B"
        }
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
  },
  mounted() {
    Typekit.load({async: true})
  }
}
</script>

<style scoped lang="stylus">
.charts
  display flex
  justify-content flex-start
  flex-wrap wrap
  width 100%
  padding 8px 0
  .chart
    width 80px
    margin 24px 24px 0 0

.container
  background-color bg-color
  display flex
  justify-content center

.simple-link
  // display block
  padding 0 4px
  text-decoration underline
  &:hover
    color accent-color

.profile-illust
  width main-content-width
  height 100%
  margin 0 auto 
  display flex

  img
    width 40%
    height auto
    margin 0 auto

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
    &.hidden
      display none
      +sp()
        display block

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

.btn-twitter
  btn-sns(#00acee)

.btn-facebook
  btn-sns(#1877f2)

.btn-pinterest
  btn-sns(#E60023)

.btn-tumbler
  btn-sns(#35465C)

+tb()
  .charts
    align-content space-between
    .chart
      width 64px
      margin 16px 8px
  .profile-illust
    width 100%
    img
      width 60%
      height 100%


+sp()
  .profile-illust
    width 90%
    img
      width 100%
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
