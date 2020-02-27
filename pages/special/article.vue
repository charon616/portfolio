<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title ロゴができるまで
      p.plane-txt() 〜 
        nuxt-link(to="/work/16" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave") Shrinx
        | の場合 〜
      section.article
        h3 イメージを共有
        .article__body
          p 依頼者の方とよく話し合って要件やイメージを固める。場合によってはイメージ画像を送ってもらったり。余裕があればそのあと1人でPinterest等を参考にしてイメージボードのようなものをIllustrator上に作る。今回は・医療機器であること・幅広い年齢層の方がユーザーであること・アメリカの展示会で披露することなどから、フラットで清潔感があり、かつ古臭く見えないようなデザインを目指すことに。
          img(src='~assets/special/share.png')
        h3 スケッチ、案出し
        .article__body
          img(src="~assets/special/sketch-hw.jpg")
          p まず手書きやiPadを用いてスケッチをし、PCに取り込む。最初の提案までになるべく方向性が違うものを最低3案くらい作ることを目指す。早ければ数時間、場合によっては間隔を空けて１週間前後かける。
        h3 提案書の作成
        .article__body
          p(style="width:100%; margin-bottom: 32px;") pdfやpng形式で案を一覧にしたものを作成し依頼者の方にフィードバックをもらう。一応人に見せる資料なのでなるべく（早く）見やすく綺麗に作る。 
          img(style="box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);" src="~assets/special/presen1.png")
          img(style="box-shadow: 0px 2px 4px rgba(0, 0, 0, .2);" src="~assets/special/presen2.png")
        h3 調整・修正
        .article__body
          p(style="width:100%; margin-bottom: 32px;") いただいたフィードバックをもとに一つの案をブラッシュアップする。今回は上の写真中の4番を元にデザインを固めていく。遠くから見たときの違和感や印刷時の色など様々な要因をできる限り考慮する。
          img(src="~assets/special/sketch1.jpg")
          img(src="~assets/special/sketch2.png")
        h3 完成！と思いきや
        .article__body
          p 必要に応じて何度かやりとりを重ね、仕様書を作成したら完成！　しかし、ここでプロダクト名に変更が入り、急遽ロゴを変更することに。
          img(src="~assets/special/comp1.png")
          img(src="~assets/special/comp2.png")
          img(src="~assets/special/comp3.png")
        h3 今度こそ完成！
        .article__body
          p 今回のロゴはNebulaという有料フォントを元に作成しているが、このフォントには小文字が用意されていないので、フォントを元に必要な小文字を自分で作成する。改めて納品書を作成し、今度こそロゴが完成。場合によっては作成したロゴを様々な展開に使用するためにいろんな形式で書き出して、まとめて納品する。Syrinxの場合はWebサイトと名刺のデザインも同時に作成した。
          img(src="~assets/special/fix.png")
          img(src="~assets/special/final1.jpg")
          img(src="~assets/special/final2.jpg")
        
        ._(style="text-align: center;")
          nuxt-link.link-button(to="/special" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave") ←　戻る

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
    components: {
        KinesisContainer, 
        KinesisElement
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
  background-color bg-color

.main-content 
  margin-top 0
  margin-bottom 64px
  line-height 2.0

.page-title
  width 360px
  max-width 80%

.plane-txt 
  text-align center
  font-size 1.2em
  a 
    color accent-color
    text-decoration underline

    &:hover 
      background-color accent-color
      color white

.article
  max-width 1080px
  margin 0 auto
  padding 0 16px
  h3
    margin 16px 8px 24px
    font-size 1.5em
    border-bottom 2px solid sub-color
    letter-spacing .1em

  &__body
    display -webkit-flex
    display flex
    flex-wrap wrap
    -webkit-justify-content flex-start
    justify-content flex-start
    margin-bottom 80px
    p
      padding 0 16px 0 16px
      width calc(100%/2)
      display inline-block
    img
        padding 8px
        width calc(100%/2)

.link-button
  margin 80px auto 32px
  padding 16px
  width "calc((%s - 2vw)/2)" % main-content-width

+sp()
  .article
    padding 8px
    &__body
      p
        width 100%
        padding 0 8px
      img
        width: 100%;

</style>