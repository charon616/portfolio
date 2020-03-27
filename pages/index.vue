<template>
  <div class="container">
    <div>
      <div class="first-view" id="first-view">

        <div v-for="n of 8" :key="n" class="animated jello">
          <img class="first-view__bg" src="/title3.svg"/>
          <img class="first-view__bg" src="/title2.svg"/>
        </div>
        <div class="first-view__txt">
            <h1>KIHO Karin</h1>
        </div>

        <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave"  class="down-button" v-scroll-to="'#work'" to><span></span>Scroll</nuxt-link>
      </div>

      <div class="main-content" id="work">
        <h2 class="page-title" >WORK</h2>
        
        <div>
          <ul class="category_list">
            <li v-bind:class="{ 'cat_Active': previewAll }" class="cat1_Active">
              <label>
              <input type="checkbox" :checked="previewAll" @click="selectAll">
              <span> All </span>
              </label>
            </li>
            <li v-for='(category, index) in category_lists' :key='index' v-bind:class='[category.activeClass, {"cat_Active": category.isActive}]'>
              <label v-bind:for="category.cat">
              <input type="checkbox" 
                v-bind:id="category.cat"
                v-bind:value="category.cat" 
                v-model="preview"
                v-on:click="checkboxClicked(category)">
                <span>{{ category.cat }}</span>
              </label>
            </li>
          </ul>
        </div>

        <div class="works">
          <transition-group name="list">
            <div class="work" v-for='(item, index) in items' :key='`first-${index}`' v-show="item.display">
              <nuxt-link class="animated" :to="{ name: 'work-id', params: { id: item.id } }">
                <img class="work__img" v-lazy="url[index]" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"/>
                <div class="work__caption" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
                  <h3 class="work__caption__title">{{ item.title }}</h3>
                  <span class="work__caption__category">
                    <span v-for="(cat, index) in item.category" :key="index">{{cat}}</span>
                  </span>
                  <span class="work__caption__period" >{{ item.period }}</span>
                </div>
              </nuxt-link>
            </div>
          </transition-group>
        </div>

        <div class="works">
          <transition-group name="list">
            <div class="work" id="square"  v-for='(item, index) in items_square' :key='`second-${index}`' v-show="item.display">
              <nuxt-link :to="{ name: 'work-id', params: { id: item.id } }">
                <img class="work__img" v-lazy="square_url[index]" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave"/>
                <div class="work__caption" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
                  <h3 class="work__caption__title">{{ item.title }}</h3>
                  <span class="work__caption__category">
                    <span v-for="(cat, index) in item.category" :key="index">{{cat}}</span>
                  </span>
                  <span class="work__caption__period" >{{ item.period }}</span>
                </div>
              </nuxt-link>
            </div>
          </transition-group>
          <nuxt-link :to="{ name: 'work-id', params: { id: '01' } }" class="works__button" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" >View All →</nuxt-link>

        </div>
        <PagetopComponent v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave"  />

      </div>

    </div>
  </div>
</template>

<script>
  import VueScrollReveal from 'vue-scroll-reveal';
  import MyCanvas from '~/components/MyCanvas.vue';
  import PagetopComponent from '~/components/PagetopComponent.vue';
  import jsonfile from '~/assets/work/works.json';

  export default {
    components: {
      MyCanvas,
      PagetopComponent,
      VueScrollReveal
    },
    mounted() {
      const hash = this.$route.hash
      if (hash && hash.match(/^#.+$/)) {
        this.$scrollTo(hash)
      }

      // let canvas = document.getElementById('myCanvas');
      //   let ctx = canvas.getContext('2d');
      //   ctx.fillRect(25, 25, 100, 100);
      //   ctx.clearRect(45, 45, 60, 60);
      //   ctx.strokeRect(50, 50, 50, 50);
    },
    created() {
    },
    watch: {
      preview: function (val) {
        let items = this.items;
        let items_square = this.items_square;
        let preview = val;

        if(preview.length > 0) {
          for (let i = 0; i < items.length; i++) {
            let categories = items[i].cat_search;
            for (let j = 0; j < preview.length; j++) {
              if(categories.indexOf(preview[j]) >= 0){
                items[i].display = true;
                break;
              } else {
                items[i].display = false;
              }
            }
          }
          for (let i = 0; i < items_square.length; i++) {
            let categories = items_square[i].cat_search;
            for (let j = 0; j < preview.length; j++) {
              if(categories.indexOf(preview[j]) >= 0){
                items_square[i].display = true;
                break;
              } else {
                items_square[i].display = false;
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
      mouseover: function(){ 
        let stalker = document.getElementById('cursor-stalker');
        stalker.classList.add('hov_');
      },
      mouseleave: function(){
        let stalker = document.getElementById('cursor-stalker');
        stalker.classList.remove('hov_');
      },
      canvasMouseover: function(e){
        // const canvas = document.getElementById('myCanvas');
        // var x = e.clientX - canvas.offsetLeft;
        // var y = e.clientY - canvas.offsetTop;
        // console.log("x:", x, "y:", y);

        // let canvas = document.getElementById('myCanvas');
        // let ctx = canvas.getContext('2d');
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);

      },
      canvasMousedown: function(e){
      },
      selectAll: function(){
        if (this.previewAll) {
          // this.previewAll = false
          this.preview = []
        } else {
          this.previewAll = true
          this.preview = []

          for (let i = 0; i < this.items.length; i++) {
            this.items[i].display = true;
          }
          for (let i = 0; i < this.items_square.length; i++) {
            this.items_square[i].display = true;
          }
        }
        for (let i=0; i < this.category_lists.length; i++){
          this.category_lists[i].isActive = true
        }
      },
      checkboxClicked: function(obj){
        this.preview = [obj.cat]
        this.previewAll = false

        // 選択したカテゴリのみ背景色をつける
        for (let i=0; i < this.category_lists.length; i++){
          this.category_lists[i].isActive = false
        }
        obj.isActive = true
      },
      handleScroll: function(evt, el) {
        console.log(window.scrollY);
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
        images: [],
        jsondata: jsonfile,
        items: [],
        items_square: [],
        category_lists: [
          { cat: 'Web/UI',
            activeClass: 'cat2_Active',
            isActive: true
          }, 
          {
            cat: 'Logo', 
            activeClass: 'cat3_Active',
            isActive: true
          },
          {
            cat: 'Printing',
            activeClass: 'cat4_Active',
            isActive: true
          },
          {
            cat: 'Other',
            activeClass: 'cat5_Active',
            isActive: true
          }
        ],	// 全カテゴリ
        preview: [],		// チェックボックスでチェックしたカテゴリを格納する
        previewAll: true,
        url: [ 
          require('~/assets/work/work31.jpg'), 
          require('~/assets/work/work30.jpg'),
          require('~/assets/work/work1.jpg'), 
          require('~/assets/work/work2.jpg'),
          require('~/assets/work/work3.jpg'),
          require('~/assets/work/work4.jpg'),
          require('~/assets/work/work5.jpg'),
          require('~/assets/work/work6.jpg'),
          require('~/assets/work/work29.jpg'),
          require('~/assets/work/work7.jpg'),
          require('~/assets/work/work8.jpg'),
          require('~/assets/work/work27.jpg'),
          require('~/assets/work/work9.jpg'),
          require('~/assets/work/work10.jpg'),
          require('~/assets/work/work11.jpg'),
          require('~/assets/work/work12.jpg')
        ],
        square_url: [
          require('~/assets/work/work23.jpg'),
          require('~/assets/work/work24.jpg'),
          require('~/assets/work/work25.jpg'),
          require('~/assets/work/work26.jpg'),
          require('~/assets/work/work15.jpg'),
          require('~/assets/work/work16.png'),
          require('~/assets/work/work17.png'),
          require('~/assets/work/work18.png'),
          require('~/assets/work/work19.png'),
          require('~/assets/work/work20.jpg'),
          require('~/assets/work/work21.jpg'),
          require('~/assets/work/work22.jpg'),
          require('~/assets/work/work13.jpg'),
          require('~/assets/work/work14.jpg'),
          require('~/assets/work/work28.jpg')
        ]
      }
    },
    created: function(){
      this.items = this.jsondata.items.slice(0, 16)
      this.items_square = this.jsondata.items.slice(16)

      this.previewAll = true
      this.preview = []
      for (let i=0; i < this.category_lists.length; i++){
        this.category_lists[i].isActive = true
      }
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].display = true;
      }
      for (let i = 0; i < this.items_square.length; i++) {
        this.items_square[i].display = true;
      }

    }
  }

</script>

<style scoped lang="stylus">
.main-content 
  margin-top 100vh

.container
  margin-bottom 20vh

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

@keyframes sdb 
  0% 
    -webkit-transform rotate(-45deg) translate(0, 0)
    opacity 0
  50% 
    opacity 1
  100% 
    -webkit-transform rotate(-45deg) translate(-20px, 20px)
    opacity 0

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

label, input[type='checkbox'] 
    cursor pointer

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

.works 
  & > span
    display -webkit-flex
    display flex
    flex-wrap wrap
    -webkit-justify-content flex-start
    justify-content flex-start

  .list-enter-active, .list-leave-active 
    transition opacity .4s
  .list-enter, .list-leave-to 
    opacity 0

  .work 
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
      .work__caption
        opacity 1
        transition opacity 0.7s main-transition
        &__title
          transform translateX(0)
          transition 0.7s main-transition 0.2s
        span
          transform translateX(0)
          transition 0.7s main-transition 0.3s
      .work__img
        transform translate3d(0, 8px, 0) scale(1.1)
        transition 0.7s main-transition

  &__button
    position relative
    padding 24px 0
    border 2px solid sub-color
    font-size 1.5em 
    font-weight bold
    border-radius radius-size
    text-align center
    text-decoration none
    display inline-block
    box-sizing border-box
    z-index 0
    width 90%
    margin 16px
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

.works:nth-child(4)
  padding-bottom 160px

#square
  width "calc(%s / 6)" % main-content-width

+tb()
  main-content-width = 100vw
  .first-view
    margin-left 0
    width 100%
  .works
    width 100%
    .work
      width "calc(%s / 2)" % main-content-width
      &__caption
        opacity 1
        left 0
        font-size 20px
        &__title
          transform translateX(0)
        &__category
          transform translateX(0)
    &:nth-child(3)
      padding-bottom 32px

  #square
    width "calc(%s / 3)" % main-content-width

  #first-view
    margin-left 0
    width 100%

+sp()
  .down-button
    background-color rgba(0, 0, 0, 0)
    color sub-color
    span
      border-left 1px solid sub-color
      border-bottom 1px solid sub-color
  .first-view
    img
      width 100%
    &__bg
      display none
    &__txt
      font-size 0.4em

  .category_list
    margin 16px 2vw 32px
    li
      width "calc((%s - 12vw)/6)" % main-content-width
      height "calc((%s - 12vw)/6)" % main-content-width
      margin 2vw
      label
        span
          letter-spacing .1em
  .works 
    display -webkit-flex
    display flex
    flex-wrap wrap
    -webkit-justify-content space-between
    justify-content space-between
    .work 
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

    #square
      width 100%      
      a
        flex-direction row
        background-color main-color
        color sub-color
        text-align left
      .work__caption
        padding 8px
      &:hover
        .work__caption
          color sub-color
        .work__img
          transform scale(1.0)
    
    &__button
      width 100%
      margin 16px
      background main-color
      border 2px solid sub-color
      color sub-color
      font-size 6vw

.scroll-appear
  opacity 0
  transition 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1)

</style>
