<template>
  <div class="work-detail">
    
      <div class="work-detail__textbox">
        <h2 class="work-detail__textbox__title">{{ item.title }}</h2>
        <div class="work-detail__textbox__property">
          <div>
            <div class="work-detail__textbox__property__category" v-for="(cat, index) in item.category" :key="index">
              {{cat}}
            </div>
            <span class="work-detail__textbox__property__period">{{ item.period }}</span>
          </div>
          <p>#{{ $route.params.id }}<span class="work-detail__textbox__property__pos"> / {{ total }}</span></p>
        </div>
        <p class="work-detail__textbox__description" style="margin-top: 40px;">{{ item.description }} </p>
        <br/>

        <div v-for='(site, index) in item.link' :key="index">
          <a target="_blank" rel="noopener noreferrer" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="item.link != null" class="link-button" v-bind:href="site">{{ item.link_txt[index] }}</a>
        </div>
      </div>

      <swiper :options="swiperOption" class="work-detail__slider"> 
        <swiper-slide v-for='(link, index) in url' :key='index'>
          <img class="work-detail__img" :src="link"/>
        </swiper-slide>
        <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="url.length!=1" class="swiper-pagination swiper-custom-pagination" slot="pagination"></div>
        <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="url.length!=1" slot="button-prev" class="swiper-button-prev swiper-button-white swiper-custom-button"></div>
        <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" v-if="url.length!=1" slot="button-next" class="swiper-button-next swiper-button-white swiper-custom-button"></div>
      </swiper>

      <div class="work-detail__viewer">
        <img class="work-detail__img" v-for='(link, index) in url' :key='index' :src="link"/>
      </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  props: ['item', 'url', 'id', 'total'],
  components: {
    swiper, 
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
        -webkit-justify-content: space-between;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.2em;
        &__category{
          display: inline;
        }
        &__category + &__category{
          border-left: 1px solid $sub-color;
          padding-left: 6px;
        }
        &__period{
          &:before{
            content: "－";
            font-weight: lighter;
            margin-right: .5rem;
          }
        }

        &__pos{
          font-size: 1.0rem;
          font-weight: lighter;
        }
      }
      &__description{
        font-family: 'Lato', 'Source Sans Pro', a-otf-gothic-bbb-pr6n, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; 
        font-weight: 400;
        font-style: normal;
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
  }

  .swiper-container {
    max-width: 64%;
    height: 90vh;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .swiper-custom-button{
    background: $sub-color;
    fill: $sub-color;
    font-size: 36px;
    text-align: center;
    line-height: 64px;
  }

  .link-button{
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1024px) {
    .work-detail{
      align-items: center;
      &__textbox{
        width: 100%;
        height: auto;
        order: 1;
        // margin: 16px;
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
        &__property{
          p:nth-child(2){
            border-bottom: 1px solid $sub-color;
            position: relative;
          }
          &__pos{
            font-size: 0.8rem;
          }
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
    }
  }

</style>
