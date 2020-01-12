<template>
  <div class="container">
    <div id="page-wrap">
      <div class="main-content">
        
        <WorkDetail :item="jsondata.items[stringToNum($route.params.id-1)]" :url="jsondata.items[stringToNum($route.params.id-1)].url" :id="$route.params.id"></WorkDetail>

        <div class="move-page">
          <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" :to="{ name: 'work-id', params: { id: calcPrevId($route.params.id) } }" class="move-page__button animated"><font-awesome-icon icon="long-arrow-alt-left"/> PREV</nuxt-link>
          <p style="display:inline;" class="move-page__pos"><span style="display:inline;" class="animated jello">#{{ $route.params.id }}</span> / 28</p>
          <nuxt-link v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" :to="{ name: 'work-id', params: { id: calcNextId($route.params.id) } }" class="move-page__button">NEXT <font-awesome-icon icon="long-arrow-alt-right"/></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkDetail from '~/components/WorkDetail.vue';
import jsonfile from '~/assets/work/works.json';
import axios from 'axios';

export default {
  transition: 'basic',
  components: {
    WorkDetail
  },

  async asyncData ({ params }) {
    try {
      let { data } = await axios.get(`https://api.myjson.com/bins/19bos6`)
      return { jsondata: data };
    } catch (err) {
      error({
        jsondata: jsonfile
      });
    }
  },

  data() {
    return {
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
  mounted() {
      Typekit.load({async: true})
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
    background: $main-color;
  }

  .move-page{
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
        animation: tada 1s;
      }
      &:nth-child(3){
        &:hover{
          animation: tada 1s;
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

  @media screen and (max-width: 1024px) {
    .main-content{
      min-height: 100%;
      padding-bottom: 20px;
    }
    .move-page{
      order: 3;
      flex-direction: row;
      padding: 16px 32px;
      width: 100%;
      &__button{
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        font-size: .8em;
      }
      &__pos{
        font-size: .8em;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .main-content{
      padding-bottom: 0;
    }
    .move-page{
      padding: 16px;
      width: 100vw;
      height: auto;
      position: fixed;
      bottom: 0;
      left: 0;
      &__button{
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        font-size: 1.2rem;
      }
      &__pos{
        font-size: .8rem;
        font-weight: lighter;
        span{
          font-size: 1.2rem;
        }
      }
    }
  }

</style>
