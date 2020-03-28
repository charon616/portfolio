<template lang="pug">
.card(v-show = "item.display" v-size = "{ width: item.width, height: item.height }")
    nuxt-link(:to="{ name: 'work-id', params: { id: item.id } }")
        img.card__img(v-lazy="url[index]" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
        .card__caption(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
            h3.card__caption__title {{ item.title }}
            span.card__caption__category
                span(v-for="(cat, id) in item.category" :key="id") {{cat}}
            span.card__caption__period {{ item.period }}
    
</template>
<script>
export default {
  props: ["item", "index", "url"],
  methods: {
    mouseover: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.add("hov_");
    },
    mouseleave: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.remove("hov_");
    }
  }
};
</script>

<style lang="stylus" scoped>
.card
  width calc(100%/4)
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
  &:after
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
  &__img
    width 100%
    height 100%
    padding 8px
    margin 0
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
    border-radius 0
    a
      justify-content center
      align-items center
      padding 8px
    &__img
      width 40%
      height auto
      padding 0
      margin 8px
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
