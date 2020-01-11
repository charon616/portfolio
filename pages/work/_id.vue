<template>
  <transition name="slide">
  <div class="container">
    <div id="page-wrap">
      <div class="main-content work-detail" id="work-detail">
  
        <div class="work-detail__textbox">
          <transition enter-active-class="animated zoomIn">
            <h2 class="work-detail__textbox__title">{{ jsondata.items[stringToNum($route.params.id-1)].title }}</h2>
          </transition>
          <div class="work-detail__textbox__property">
            <p>{{ jsondata.items[stringToNum($route.params.id-1)].category }} | {{ jsondata.items[stringToNum($route.params.id-1)].period }}</p>
            <p>#{{ $route.params.id }}</p>
          </div>
          <p class="work-detail__textbox__description" style="margin-top: 40px;">{{ jsondata.items[stringToNum($route.params.id-1)].description }} </p>
          <br/>
          <a v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="jsondata.items[stringToNum($route.params.id-1)].link != null" class="link-button" v-bind:href="jsondata.items[stringToNum($route.params.id-1)].link">{{ jsondata.items[stringToNum($route.params.id-1)].link_txt }}</a>
        </div>


        <swiper :options="swiperOption" class="work-detail__slider"> 
          <swiper-slide v-for='(link, index) in jsondata.items[stringToNum($route.params.id-1)].url' :key='index'>
            <img class="work-detail__img" :src="link"/>
          </swiper-slide>
          <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="jsondata.items[stringToNum($route.params.id-1)].url.length!=1" class="swiper-pagination swiper-pagination-black"  slot="pagination"></div>
          <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="jsondata.items[stringToNum($route.params.id-1)].url.length!=1" slot="button-prev" class="swiper-button-prev swiper-button-white swiper-custom-button"></div>
          <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="jsondata.items[stringToNum($route.params.id-1)].url.length!=1" slot="button-next" class="swiper-button-next swiper-button-white swiper-custom-button"></div>
        </swiper>

        <div class="work-detail__viewer">
          <img class="work-detail__img" v-for='(link, index) in jsondata.items[stringToNum($route.params.id-1)].url' :key='index' :src="link"/>
        </div>

        <div class="work-detail__move-page">
          <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" :to="{ name: 'work-id', params: { id: calcPrevId($route.params.id) } }" class="work-detail__move-page__button"><i class="fas fa-long-arrow-alt-left"></i> PREV</nuxt-link>
          <p>#{{ $route.params.id }} / 28</p>
          <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" :to="{ name: 'work-id', params: { id: calcNextId($route.params.id) } }" class="work-detail__move-page__button">NEXT <i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </transition>

</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import jsonfile from '~/assets/work/works.json';

export default {
  components: {
    swiper, 
    swiperSlide
  },

  data() {
    return {
      swiperOption: {
        // loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      jsondata: jsonfile,
    }
  },

  created() {
    let stalker = document.getElementById('cursor-stalker');
    if(stalker==null){
      return;
    }
    stalker.classList.remove('hov_');
  },

  methods: {
    stringToNum: function(str){
      return Number(str);
    },
    calcPrevId: function(id){
      if(Number(id)-1 != 0){
        return ( '00' + (Number(id)-1) ).slice( -2 );
      }else{
        return 28;
      }
    },
    calcNextId: function(id){
      if(Number(id) == 28){
        return '01';
      }else{
        return ( '00' + (Number(id)+1) ).slice( -2 );
      }
    },
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
<style lang="scss" scoped >
@import 'swiper/dist/css/swiper.css'; 
@import "~assets/scss/variables";

  .main-content{
    margin-top: 0;
  }

  .work-detail{
    position: relative;
    display: flex;
    flex-wrap:wrap;
    &__viewer{
      display: none;
    }

    &__textbox{
      padding: 32px;
      width: 36%;
      height: 90vh;
      text-align: justify;
      position: relative;
      
      &__title{
        font-size: 2.4em;
      }
      &__property{
        display: flex;
        margin: 8px 0;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.2em;
      }
    }

    &__slider{
      z-index: 1;
    }

    &__img {
      height: auto;
      width: 100%;
      object-fit: cover;
    }

    &__move-page{
      width: 100%;
      height: 10vh;
      padding: 0 200px;
      font-size: 1.6em;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 90;
      &__button{
        &:hover{
          i{
            animation: moveleft 1.2s ease-in-out infinite;
          }
        }
        &:nth-child(3){
          &:hover{
            i{
              animation: moveright 1.2s ease-in-out infinite;
            }
          }
        }
      }
    }
  }

  @keyframes moveleft {
    0%   { transform: translateX(0%); }
    60%  { transform: translateX(-50%); }
    85%  { transform: translateX(-50%); }
    100%  { transform: translateX(0%); }
  }
  @keyframes moveright {
    0%   { transform: translateX(0%); }
    60%  { transform: translateX(50%); }
    85%  { transform: translateX(50%); }
    100%  { transform: translateX(0%); }
  }

  .swiper-container {
    max-width: 64%;
    height: 90vh;
  }
  .swiper-slide {

  }

  .swiper-pagination{
    color: $sub-color;

  }

  .swiper-button-prev{
    
  }
  .swiper-button-next{
  }

  .swiper-pagination-bullet-active{
    background: #ffd700;
  }

  @media screen and (max-width: 1024px) {
    .work-detail{
      background: $main-color;
      align-items: center;
      &__textbox{
        width: 80%;
        height: auto;
        order: 1;
        padding-right: 8px;
      }
      &__img {
        width: 100%;
        padding: 0 32px 32px;
        max-width: 100%; 
        height: auto;
      }
      &__slider {
        width: 100%;
        padding: 0 32px 32px;
        max-width: 100%; 
        height: auto;
        order: 3;
      }
      &__move-page{
        width: 20%;
        height: 200px;
        padding: 0 32px 0 8px;
        order: 2;
        font-size: 1.2em;
        flex-direction: column;
        justify-content: space-around;
        &__button{
          // background-color: $bg-color;
          border: 2px solid $sub-color;
          border-radius: 4px;
          padding: 8px 16px;
          color: $sub-color;
          font-size: 2vw;
          &:hover{
            background-color: $sub-color;
            color: $bg-color;
          }
        }
        p{
          font-weight: normal;
          font-size: 0.8em;
        }
      }
    }
    .swiper-custom-button{
      background: $sub-color;
      font-size: 36px;
      text-align: center;
      line-height: 64px;
    }
  }

  @media screen and (max-width: 480px) {
    .work-detail{
      position: relative;
      &__textbox{
        order: 1;
        width: 100%;
        padding: 16px;
        &__title{
          font-size: 1.8em;
          text-align: initial;
        }
      }
      &__img {
        padding: 8px 16px;
      }
      &__slider {
        display: none;
      }
      &__viewer{
        display: block;
        order: 2;
        padding: 0;
        margin-bottom: 48px;
      }
      &__move-page{
        order: 3;
        flex-direction: row;
        padding: 16px;
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 0;
        left: 0;
        &__button{
          background-color: rgba(0, 0, 0, 0);
          border: 0;
          font-size: .8em;
        }
        p{
          font-size: .8em;
        }

      }

    }
  }

</style>
