<template>
  <div class="side-content">
    <nuxt-link to="/" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" >
      <img class="logo-pc" src="~/assets/icon/logo-pc.png" alt="logo-pc">
      <img class="logo" src="~/assets/icon/logo.png" alt="logo">
    </nuxt-link>
    <div class="menu">
      <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" class="menu__item" v-scroll-to="'#first-view'" to="/">TOP</nuxt-link>
      <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" class="menu__item" v-scroll-to="'#work'" to="/#work">WORK</nuxt-link>
      <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" class="menu__item" to="/about">ABOUT</nuxt-link>
      <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" class="menu__item" to="/special">SPECIAL</nuxt-link>
      <!-- <nuxt-link class="menu__item" to="/about"><i class="fab fa-instagram"></i></nuxt-link> -->
      <!-- <nuxt-link class="menu-item" to="/about">SPECIAL</nuxt-link> -->
    </div>

    <div class="sm-menu">
      <transition name="fade">
      <button class="sm-menu__trigger" v-bind:class="{ active: isMenuActive }" v-on:click="clickMenu" aria-label="menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </transition>
      <transition name="fade">
        <div class="sm-menu__items" v-show="isMenuActive">
          <nuxt-link class="sm-menu__items__item" v-scroll-to="'#first-view'" to="/">TOP</nuxt-link>
          <nuxt-link class="sm-menu__items__item" v-scroll-to="'#work'" to="/#work">WORK</nuxt-link>
          <nuxt-link class="sm-menu__items__item" to="/about">ABOUT</nuxt-link>
          <nuxt-link class="sm-menu__items__item" to="/special">SPECIAL</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import { mapMutations } from 'vuex';

let photos = {
  1: require('~/assets/icon/logo.png'), 
  2: require('~/assets/icon/logo-pc.png')
}

export default {
  mounted () {
    if ($nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods:{
    clickMenu: function(){
      this.$store.commit('changeMenu')
    },
    scrollToHash () {
      const hash=$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    },
    mouseover: function(){ 
      let stalker = document.getElementById('cursor-stalker');
      stalker.classList.add('hov_');
    },
    mouseleave: function(){
      let stalker = document.getElementById('cursor-stalker');
      stalker.classList.remove('hov_');
    }
  },
  computed: {
    photos() { return photos },
    isMenuActive () {
      return this.$store.state.isMenuActive
    }
  }
}
 

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";

  button{
    outline:0;
  }

  .side-content {
    width: $side-bar-width;
    height: 100vh;
    padding: 0;
    position: fixed;
    top: 0;
    left: calc(#{$side-content-width} - #{$side-bar-width});
    z-index: 100;

    .logo-pc {
      display: block;
      margin-top: 32px;
      padding: 0 8px;
      width: $side-bar-width;
      height: auto;
    }
    .logo{
      display: none;
      margin-top: 5vh;
      width: $side-bar-width;
      height: auto;
    }

    background-color: $side-bar-color;
  }

  .menu {
    margin-top: 120px;
    font-size: calc(#{$side-bar-width}/5);
    font-weight: bold;

    &__item {
      width: 100%;
      position: relative;
      margin: 32px 0;
      padding: 6px 0;
      text-align: center;
      display: block;
      font-size: 0.8em;
      transition: all .1s ease-out;
      background-color: rgba(0, 0, 0, 0);
      z-index: 0;

      // &::after {
      //   content: '';
      //   width: 55%;
      //   height: 2px;
      //   margin: 2px auto;
      //   background-color: $sub-color;
      //   opacity: 0;
      //   display: block;
      //   -webkit-transform: translateX(-10%);
      //   transform: translateX(-10%);
      //   transition: all .1s ease-out;
      // }
      &::after {
        content: '';
        width: 80%;
        height: 100%;
        border-radius: 2em;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        background-color: $sub-color;
        background-color: rgba(90, 50, 246, 0.2);
        opacity: 0;
        display: block;
        -webkit-transform: translateX(10%);
        transform: translateX(10%);
        transition: all .1s ease-out;
        z-index: -1;
      }
      &:hover {
        &::after {
          opacity: 1;
          transition: all .3s ease-out;
        }
      }
    }
  }

  .sm-menu{
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .side-content {
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: $side-bar-height;
        filter: drop-shadow(0 3px 4px rgba(0,0,0,0.3));

        .logo {
          display: block;
          margin: auto;
        }
        .logo-pc{
          display: none;
        }
    }

    .menu {
        width: calc(#{$main-content-width} - #{$side-bar-width});
        margin-top: 0;
        margin-left: 20px;
        font-size: 1.6em;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;

      &__item {
        line-height: $side-bar-height;
        &::after {
            height: 50%;
            width: 80%;
            // width: 40%;
            // margin-top: 0;
            // position: absolute;
            // bottom: 20%;
            // left: 50%;
            -webkit-transform: translateX(10%) translateY(50%);
            transform: translateX(10%) translateY(50%);
        }
        &:hover{
            &::after {
                // -webkit-transform: translateX(-50%);
                // transform: translateX(-50%);
            }
        }
      }
    }

  }

  @media screen and (max-width: 480px) {
    .side-content {
      background-color: rgba(0, 0, 0, 0);
      filter: drop-shadow(0 0px 0px rgba(0,0,0,0));
      margin: 16px 0;
      height: $nav-height;
      z-index: 1;

      .logo {
        height: $nav-height;
        padding: 8px auto;
        width: auto;
        text-align: center;
      }
    }

    .menu {
      display: none;
    }

    .sm-menu {
      display: block;
      width: 50px;
      height: $nav-height;
      text-align: right;
      position: absolute;
      right: 16px;
      top: 12px;
      z-index: 100;

      &__trigger{
        display: inline-block;
        transition: all .4s;
        box-sizing: border-box;

        position: relative;
        width: 44px;
        height: 30px;
        z-index: 1;
        background: rgba(0, 0, 0, 0);
        border: 0;

        span{
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: $sub-color;
          border-radius: 3px;
          &:nth-of-type(1) {
            top: 0;
            transition: all .4s cubic-bezier(0.55, 0.05, 0.22, 0.99);
          }
          &:nth-of-type(2) {
            top: 14px;
            transition: all .4s .2s cubic-bezier(0.55, 0.05, 0.22, 0.99);
            clip-path: inset(0);
          }
          &:nth-of-type(3) {
            bottom: 0;
            transition: all .4s .1s cubic-bezier(0.55, 0.05, 0.22, 0.99);
          }
        }
      }
      &__items{
        position: absolute;
        right: -8px;
        top: $nav-height;
        margin-top: -8px;
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        text-align: right;
        line-height: 2.0em;
        z-index: 0;
        &__item{
          background-color: $accent-color;
          color: $main-color;
          padding: 4px 12px;
          z-index: 0;
        }
        // &::before{
        //   content: '';
        //   width: 100vw;
        //   height: 100vh;
        //   background: pink;
        //   position: fixed;
        //   top: -16px;
        //   left: 0;
        //   z-index: -1;
        //   opacity: 0.5;
        //   pointer-events: none;
        // }
      }
    }

    //menuのtransition effect
    .fade-enter-active, .fade-leave-active {
      transition: all .6s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      -webkit-clip-path: inset(0);
      clip-path: inset(0);
    }
    .fade-enter, .fade-leave-to{
      -webkit-clip-path: inset(0 100% 0 0);
      clip-path: inset(0 0 100% 0);
    }
    
    .v-enter-to,
    .v-leave {
      opacity: 1;
    }

    .sm-menu__trigger.active{
      width: 40px;
      span{
        background-color: $accent-color;
      }
    }
    .sm-menu__trigger.active span:nth-of-type(1) {
      -webkit-transform: translateY(14.5px) rotate(-45deg);
      transform: translateY(14.5px) rotate(-45deg);
      transition: all .4s .1s cubic-bezier(0.55, 0.05, 0.22, 0.99);
    }
    .sm-menu__trigger.active span:nth-of-type(2) {
      clip-path: inset(0 0 0 100%);
      transition: all .4s cubic-bezier(0.55, 0.05, 0.22, 0.99);
    }
    .sm-menu__trigger.active span:nth-of-type(3) {
      -webkit-transform: translateY(-14.5px) rotate(45deg);
      transform: translateY(-14.5px) rotate(45deg);
      transition: all .4s .2s cubic-bezier(0.55, 0.05, 0.22, 0.99);
    }
  }
</style>
