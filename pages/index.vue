<template lang="pug">
  .container
    ._group
      .first-view#first-view
        .jello(v-for="n of 8" :key="n")
          img.first-view__bg(src="/title3.svg" alt="")
          img.first-view__bg(src="/title2.svg" alt="")
        transition(name="slide-fade" appear)
          .first-view__txt
            transition(name="slide-fade2" appear)
              h1 KIHO Karin
        transition(name="slide-fade3" appear)
          nuxt-link.down-button(aria-label="down" @mouseover.native="mouseover" @mouseleave.native="mouseleave" v-scroll-to="'#work'" to) Scroll
            span

      .main-content#work
        h2.page-title WORK

        ._category-nav
          ul.category_list
            li.cat1_Active(v-bind:class="{ cat_Active: previewAll }")
              label
                input(type="checkbox" :checked="previewAll" @click="selectAll")
                span All
            li(v-for="(category, index) in category_lists" :key="index" :class="[ category.activeClass, { cat_Active: category.isActive } ]")
              label(:for="category.cat")
                input(type="checkbox" :id="category.cat" :value="category.cat" v-model="preview" @click="checkboxClicked(category)")
                span {{ category.cat }}

        .grid
          card(v-for="(item, index) in items" :key="`first-${index}`" :item="item" :index="index+1")

        .button-container
          nuxt-link.works__button(:to="{ name: 'work-id', params: { id: '01' } }" @mouseover.native="mouseover" @mouseleave.native="mouseleave") View All →

        PagetopComponent(@mouseover.native="mouseover" @mouseleave.native="mouseleave")
        
</template>

<script>
import PagetopComponent from "~/components/PagetopComponent.vue";
import card from "~/components/card.vue";
import jsonfile from "~/assets/work/works.json";

export default {
  components: {
    PagetopComponent,
    card
  },
  mounted() {
    const hash = this.$route.hash;
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash);
    }
  },
  watch: {
    preview: function(val) {
      let items = this.items;
      let preview = val;

      if (preview.length > 0) {
        for (let i = 0; i < items.length; i++) {
          let categories = items[i].cat_search;
          for (let j = 0; j < preview.length; j++) {
            if (categories.indexOf(preview[j]) >= 0) {
              items[i].display = true;
              break;
            } else {
              items[i].display = false;
            }
          }
        }
      } else {
        for (let i = 0; i < items[i].length; i++) {
          items[i].display = true;
        }
      }
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
    selectAll: function() {
      if (this.previewAll) {
        // this.previewAll = false
        this.preview = [];
      } else {
        this.previewAll = true;
        this.preview = [];

        for (let i = 0; i < this.items.length; i++) {
          this.items[i].display = true;
        }
      }
      for (let i = 0; i < this.category_lists.length; i++) {
        this.category_lists[i].isActive = true;
      }
    },
    checkboxClicked: function(obj) {
      this.preview = [obj.cat];
      this.previewAll = false;

      // 選択したカテゴリのみ背景色をつける
      for (let i = 0; i < this.category_lists.length; i++) {
        this.category_lists[i].isActive = false;
      }
      obj.isActive = true;
    },
    handleScroll: function(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      return window.scrollY > 100;
    }
  },
  data() {
    return {
      scrollY: 0,
      scrollTimer: 0,
      radius: 50,
      items: jsonfile.items,
      category_lists: [
        { cat: "Web/UI", activeClass: "cat2_Active", isActive: true },
        {
          cat: "Logo",
          activeClass: "cat3_Active",
          isActive: true
        },
        {
          cat: "Printing",
          activeClass: "cat4_Active",
          isActive: true
        },
        {
          cat: "Other",
          activeClass: "cat5_Active",
          isActive: true
        }
      ], // 全カテゴリ
      preview: [], // チェックボックスでチェックしたカテゴリを格納する
      previewAll: true,
    };
  },
  created: function() {
    this.previewAll = true;
    this.preview = [];
    for (let i = 0; i < this.category_lists.length; i++) {
      this.category_lists[i].isActive = true;
    }
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].display = true;
    }
  }
};
</script>

<style scoped lang="stylus">

.jello {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: jello;
  transform-origin: center;
  animation-delay 1s
}

@keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.container
  margin-bottom 20vh
  ._group
    width 100%
    .first-view
      position absolute
      left 0
      top 0
      width 100%
      height 100vh
      z-index 0
      color rgb(237, 168, 179)
      object-fit cover
      overflow hidden
      &__img
        position absolute
        width 400px
        height auto
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
      &__bg
        width 100%
        height auto
        transform rotateZ(-10deg) translateY(-50%)
      &__txt
        color white
        background-color sub-color
        padding 24px 48px
        text-align center
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
        h1
          font-size 2.4em
          letter-spacing 0.2em
        p
          font-size 1.2em
      .down-button
        position absolute
        bottom 20px
        left 50%
        z-index 2
        display inline-block
        -webkit-transform translate(-50%, -50%)
        transform translate(-50%, -50%)
        text-decoration none
        font-weight bold
        letter-spacing .1em
        padding 70px 32px 8px
        color rgba(46, 255, 192, 1)
        background-color rgba(46, 255, 192, 0.25)
        span
          position absolute
          top 0
          left 50%
          width 24px
          height 24px
          margin-left -12px
          border-left 1px solid rgba(46, 255, 192, 1)
          border-bottom 1px solid rgba(46, 255, 192, 1)
          -webkit-transform rotate(-45deg)
          transform rotate(-45deg)
          -webkit-animation sdb 1.5s infinite
          animation sdb 1.5s infinite
          box-sizing border-box
        +sp()
          background-color rgba(0, 0, 0, 0)
          color sub-color
          span
            border-left 1px solid sub-color
            border-bottom 1px solid sub-color
      +tb()
        margin-left 0
        width 100%
      +sp()
        img
          width 100%
        &__bg
          display none
        &__txt
          font-size 0.4em
    .main-content
      margin-top 100vh
      margin-bottom 20vh
      .page-title
        padding 48px 1.2em
        margin 8px auto 8px
        height calc(10vh + 48px)
        &:before
          top 48px
          left 0

        &:after
          bottom 0
          right 0

.cat_Active
  for num in (1..5)
    &.cat{num}_Active
      background-image url("~assets/icon/cat" + num + "_bg.svg")

.category_list
  display -webkit-flex
  display flex
  -webkit-justify-content center
  justify-content center
  -webkit-align-items center
  align-items center
  margin 32px auto 40px
  li
    display inline-block
    margin 0 16px
    width 80px
    height 80px
    label
      display inline-block
      position relative
      width 100%
      height 100%
      background-size contain
      text-align center
      input
        display none
      span
        color sub-color
        font-size .8em
        letter-spacing .2em
        position absolute
        bottom -12px
        left 50%
        transform translateX(-50%)
    for num in (1..5)
      &:nth-child({num}) label
        background-image url("~assets/icon/cat_" + num + ".svg")
  +sp()
    margin 16px 2vw 32px
    li
      width "calc((%s - 12vw)/6)" % main-content-width
      height "calc((%s - 12vw)/6)" % main-content-width
      margin 2vw
      label
        span
          letter-spacing .1em

.grid
  display grid
  grid-template-rows repeat(5, calc(91vw/48))
  grid-template-columns repeat(48, calc(91vw/48))
  justify-content center
  grid-auto-rows calc(91vw/48)
  grid-auto-flow dense
  padding 0 4px 0 8px
  +tb()
    display -webkit-flex
    display flex
    flex-wrap wrap
    -webkit-justify-content flex-start
    justify-content flex-start
    width 100%
    padding 0
  +sp()
    -webkit-justify-content space-between
    justify-content space-between

@keyframes sdb
  0%
    -webkit-transform rotate(-45deg) translate(0, 0)
    opacity 0
  50%
    opacity 1
  100%
    -webkit-transform rotate(-45deg) translate(-20px, 20px)
    opacity 0

label, input[type='checkbox']
  cursor pointer

.list-enter-active, .list-leave-active
  transition opacity .4s
.list-enter, .list-leave-to
  opacity 0

.button-container
  padding 4px 12px 0 16px

.works
  &__button
    position relative
    padding 24px 0
    border 2px solid sub-color
    font-size 1.5em
    font-weight bold
    border-radius radius-size
    text-align center
    margin 0 auto
    text-decoration none
    display inline-block
    z-index 0
    width 100%
    overflow hidden
    transition all 0.4s main-transition

    &::before
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      z-index -1
      content ''
      background-color sub-color
      transform-origin left top
      transform  scale(0, 1)
      transition all 0.4s main-transition
    &:hover
      color main-color
      transition all 0.7s main-transition
      &::before
        transform-origin left top
        transform  scale(1, 1)
        transition all 0.7s main-transition
    +sp()
      width 100%
      background main-color
      color sub-color
      font-size 6vw

</style>
