<template>
  <div class="side-content">
    <nuxt-link to="/">
      <img class="logo-pc" src="~/assets/icon/logo-pc.png">
      <img class="logo" src="~/assets/icon/logo.png">
    </nuxt-link>
    <div class="menu">
      <nuxt-link class="menu__item" v-scroll-to="'/'" to="/">TOP</nuxt-link>
      <nuxt-link class="menu__item" v-scroll-to="'#work'" to="/#work">WORK</nuxt-link>
      <nuxt-link class="menu__item" to="/about">ABOUT</nuxt-link>
      <!-- <nuxt-link class="menu__item" to="/about"><i class="fab fa-instagram"></i></nuxt-link> -->
      <!-- <nuxt-link class="menu-item" to="/about">SPECIAL</nuxt-link> -->
    </div>

    <div class="sm-menu">
      <transition name="fade">
      <button class="sm-menu__trigger" v-bind:class="{ active: isActive }" v-on:click="clickMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </transition>
      <transition name="fade">
        <div class="sm-menu__items" v-show="menu">
          <nuxt-link class="sm-menu__items__item" to="/">TOP</nuxt-link>
          <nuxt-link class="sm-menu__items__item" to="/#work">WORK</nuxt-link>
          <nuxt-link class="sm-menu__items__item" to="/about">ABOUT</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
let photos = {
  1: require('~/assets/icon/logo.png'), 
  2: require('~/assets/icon/logo-pc.png')
}

export default {
  data(){
    return{
      menu: false,
      isActive: false
    }
  },
  mounted () {
    if ($nuxt.$route.hash) {
      this.scrollToHash()
    }
  },
  methods:{
    clickMenu: function(){
      this.menu = !this.menu;
      this.isActive = !this.isActive;
    },
    scrollToHash () {
      const hash=$nuxt.$route.hash
      this.$nextTick(() => {
        this.$scrollTo(hash, 0, { offset: -120 })
      })
    }
  },

  computed: {
    photos() { return photos }
  }
}
 

</script>

<style scoped lang="scss">
  @import "~assets/scss/variables";

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
    margin-top: 160px;
    font-size: calc(#{$side-bar-width}/5);
    font-weight: bold;

    &__item {
      width: 100%;
      position: relative;
      margin: 32px 0;
      text-align: center;
      display: block;
      font-size: 0.8em;

      &::after {
        content: '';
        width: 60%;
        height: 4px;
        margin: 5px auto;
        background-color: $sub-color;
        opacity: 0;
        display: block;
        -webkit-transform: translateX(-10%);
        transform: translateX(-10%);
        transition: all .1s ease-out;
      }

      &:hover {
        &::after {
          opacity: 1;
          -webkit-transform: translateX(0%);
          transform: translateX(0%);
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
            width: 40%;
            margin-top: 0;
            position: absolute;
            bottom: 20%;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
        }
        &:hover{
            &::after {
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
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
        width: 50px;
        height: 40px;
        z-index: 1;
        background: rgba(0, 0, 0, 0);
        border: 0;

        span{
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: $sub-color;
          border-radius: 3px;
          transition: all .4s ease-out;
          &:nth-of-type(1) {
            top: 0;
          }
          &:nth-of-type(2) {
            top: 18.5px;
          }
          &:nth-of-type(3) {
            bottom: 0;
          }
        }
      }
      &__items{
        position: absolute;
        right: -8px;
        top: $nav-height;
        margin-top: -8px;
        display: block;
        font-size: 1.4em;
        font-weight: bold;
        text-align: right;
        line-height: 1.8em;
        z-index: 0;
        &__item{
          background-color: $bg-color;
          padding: 2px 8px;
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
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
      transform: translateX(40%);
    }
    
    .v-enter-to,
    .v-leave {
      opacity: 1;
    }
    
    .fade-enter-active{
      transition: all .4s ease-out;
    }
    .fade-leave-active {
      transition: all .3s ease-out;
    }

    .sm-menu__trigger.active span:nth-of-type(1) {
      -webkit-transform: translateY(17px) rotate(-45deg);
      transform: translateY(18.5px) rotate(-45deg);
    }
    .sm-menu__trigger.active span:nth-of-type(2) {
      opacity: 0;
    }
    .sm-menu__trigger.active span:nth-of-type(3) {
      -webkit-transform: translateY(-17px) rotate(45deg);
      transform: translateY(-18.5px) rotate(45deg);
    }
  }
</style>
