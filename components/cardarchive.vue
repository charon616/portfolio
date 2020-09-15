<template lang="pug">
.card(v-show = "item.display" v-size = "{ width: item.width, height: item.height }")
  nuxt-link(:to="{ name: 'workarchive-id', params: { id: calcId(index) } }")
    picture
      source.card__img(:data-srcset="webpurl" type="image/webp")
      img.card__img(:data-src="url" v-lazy="url" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :alt="url")

    .card__caption(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
        h3.card__caption__title {{ item.title }}
        span.card__caption__category
            span(v-for="(cat, id) in item.category" :key="id") {{cat}}
        span.card__caption__period {{ item.period }}
    span.card__new(v-if="item.period == 2020")
    
</template>
<script>
export default {
  props: ["item", "index"],
  computed: {
    url: function(){
      return require("~/assets/work/" + this.item.cover)
    },
    webpurl: function(){
      let name = this.baseName(this.item.cover)
      return require("~/assets/work/" + name + ".webp")
    }
  },
  methods: {
    mouseover: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.add("hov_");
    },
    mouseleave: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.remove("hov_");
    },
    calcId: function(id){
      return ( '00' + (Number(id)) ).slice( -2 )
    },
    baseName: function(str){
      var base = new String(str).substring(str.lastIndexOf('/') + 1); 
      if(base.lastIndexOf(".") != -1)       
          base = base.substring(0, base.lastIndexOf("."));
      return base;
    }
  }
};
</script>

<style lang="stylus" scoped>

.list-enter-active, .list-leave-active
  transition opacity .4s
.list-enter, .list-leave-to
  opacity 0

.card
  height auto
  text-align left
  margin 0 
  padding 0
  font-weight normal
  position relative
  overflow hidden
  display block
  border-radius radius-size
  &::before
    content ''
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0)
    position absolute
    left 0
    top 0
    z-index 1
    border 8px solid main-color
    box-sizing border-box
    pointer-events none
  &::after
    content ''
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0)
    position absolute
    left 0
    top 0
    z-index 1
    border 8px solid main-color
    box-sizing border-box
    border-radius "calc(%s * 4)" % radius-size
    pointer-events none
  a
    display flex
  picture
    width 100%
    height 100%
    margin 0
  &__img
    width 100%
    height 100%
    object-fit cover
    box-sizing border-box
    border-radius "calc(%s * 4)" % radius-size
    transition all .1s ease-out
    z-index 0
    position relative
    transition 0.2s main-transition
  &__caption
    opacity 0
    background-color main-color
    position absolute
    padding 16px 16px 16px 24px
    bottom 16%
    border-radius 0 radius-size radius-size 0
    font-size 1.5vw
    transition opacity 0.4s main-transition
    &__title
      font-size 0.8em
      letter-spacing 0.08em
      transform translateX(-50%)
      transition transform 0.4s main-transition0.2s
    &__category
      left -32px
      transform translateX(-50%)
      font-size 0.8em
      transition transform 0.4s main-transition 0.1s
      span + span
        border-left 1px solid sub-color
        padding-left 4px
        padding-right 0
      span
        padding-right 4px
    &__period
      font-size 0.8em
      &:before
        content "－"
        font-weight lighter
        margin-right .5rem
  &__new
    width 48px
    height 48px
    position absolute
    top 16px
    left 16px
    z-index 2
    background-image url("~assets/icon/new100.svg")
    +sp()
      top 20px
      left 20px
      width 36px
      height 36px



  &:hover
    .card__caption
      opacity 1
      transition opacity 0.7s main-transition
      &__title
        transform translateX(0)
        transition 0.7s main-transition 0.2s
      span
        transform translateX(0)
        transition 0.7s main-transition 0.3s
    .card__img
      transform translate3d(0, 8px, 0) scale(1.1)
      transition 0.7s main-transition

  +tb()
    main-content-width = 100vw;
    width "calc(%s / 2)" % main-content-width
    height "calc(%s / 8 * 3)" % main-content-width
    &__img
      width "calc(%s / 2)" % main-content-width
      height "calc(%s / 8 * 3)" % main-content-width
    &__caption
      opacity 1
      left 0
      font-size 20px
      &__title
        transform translateX(0)
      &__category
        transform translateX(0)
  +sp()
    width 100%
    height auto
    border-radius 0
    a
      justify-content center
      align-items center
      padding 8px
    picture
      width 40%
      padding 0
      margin 8px
    &__img
      width 100%
      height auto
      border-radius 6px
    &__caption
      width 60%
      position relative
      background-color rgba(0, 0, 0, 0)
      padding 8px
      margin 0
      left 0
      opacity 1
      border-radius 0
      font-size 20px
      display block
    &:hover
      .work__caption
        background-color rgba(0, 0, 0, 0)
        color sub-color
        padding 8px
        display inline-block
        width 60%
        height 100%
      .work__img
        transform initial
    &::before
      display none
    &::after
      display none

</style>
