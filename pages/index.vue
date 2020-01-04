<template>
  <div class="container">
    <div id="page-wrap">
      <div id="first-view">
        <!-- <iframe
            title="p5.js demo"
            src="https://nnamm.com/_creativecoding/180924/demo1.html"
            width="100%"
            height="100%"
            frameborder="0"
            sandbox="allow-scripts">
        </iframe> -->
        <!-- <iframe width="100%" height="100%" frameborder="0" sandbox="allow-scripts" src="https://editor.p5js.org/charon616/embed/JcH3ahfdK"></iframe> -->
        <nuxt-link class="down-button" v-scroll-to="'#work'" to><span></span>Scroll</nuxt-link>
      </div>

      <div class="main-content" id="work">
        <h2 class="page-title">WORK</h2>
        <div class="works">
          <div class="work" v-for='(item, index) in items' :key='`first-${index}`'>
            <nuxt-link :to="{ name: 'work-id', params: { id: item.id } }">
              <img class="work__img" :src="item.url"/>
              <div class="work__caption">
                <h3 class="work__caption__title">{{ item.title }}</h3>
                <p class="work__caption__category">{{ item.category }} | {{ item.period }}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="works">
          <div class="work" id="square"  v-for='(item, index) in items_square' :key='`second-${index}`'>
            <nuxt-link :to="{ name: 'work-id', params: { id: item.id } }">
              <img class="work__img" :src="item.url"/>
              <div class="work__caption">
                <h3 class="work__caption__title">{{ item.title }}</h3>
                <p class="work__caption__category">{{ item.category }} | {{ item.period }}</p>
              </div>
            </nuxt-link>
          </div>
          <nuxt-link :to="{ name: 'work-id', params: { id: '01' } }" class="works__button">View All <i class="fas fa-long-arrow-alt-right"></i></nuxt-link>
        </div>

        <PagetopComponent />

      </div>

    </div>
  </div>
</template>

<script>
  import PagetopComponent from '~/components/PagetopComponent.vue';
  import jsonfile from '~/assets/work/works.js';

  export default {
    components: {
      PagetopComponent,
    },

    data() {
      return {
        scrollY: 0,
        scrollTimer: 0,
        images: [],
        jsondata: jsonfile,
        items: [{
            title: '東京大学制作展2019',
            url: require('~/assets/work/work1.jpg'),
            period: '2019',
            category: 'Poster/Pamplet',
            id: '01'
          },
          {
            title: 'AR-ZINE',
            url: require('~/assets/work/work3.jpg'),
            period: '2019',
            category: 'AR App',
            id: '02'
          },
          {
            title: '東京大学制作展2019EXTRA',
            url: require('~/assets/work/work3.jpg'),
            period: '2019',
            category: 'Poster',
            id: '03'
          },
          {
            title: '地図',
            url: require('~/assets/work/work3.jpg'),
            period: '2019',
            category: 'Media Art',
            id: '04'
          },
          {
            title: '東京大学制作展2017',
            url: require('~/assets/work/work5.png'),
            period: '2017',
            category: 'Web',
            id: '05'
          },
          {
            title: 'biscUiT',
            url: require('~/assets/work/work6.jpg'),
            period: '2015-2018',
            category: 'Free Paper',
            id: '06'
          },
          {
            title: '魅る文字',
            url: require('~/assets/work/work7.jpg'),
            period: '2019',
            category: 'Free Paper（編集）',
            id: '07'
          },
          {
            title: 'Web Portfilio',
            url: require('~/assets/work/work8.jpg'),
            period: '2019',
            category: 'Web',
            id: '08'
          },
          {
            title: 'unlock',
            url: require('~/assets/work/work9.png'),
            period: '2019',
            category: 'App UI',
            id: '09'
          },
          {
            title: 'yumemo',
            url: require('~/assets/work/work10.png'),
            period: '2018',
            category: 'App UI',
            id: '10'
          },
          // {
          //   title: 'YAC2018',
          //   url: require('~/assets/work/work11.png'),
          //   period: '2018',
          //   category: 'Banner',
          //   id: '11'
          // },
          {
            title: 'AMPM',
            url: require('~/assets/work/work12.png'),
            period: '2018',
            category: 'Animation',
            id: '11'
          },
          {
            title: 'UmeeT',
            url: require('~/assets/work/work23.png'),
            period: '2017',
            category: 'Logo',
            id: '12'
          },
          {
            title: 'NUTONE',
            url: require('~/assets/work/work24.png'),
            period: '2019',
            category: 'Logo / Web',
            id: '13'
          },
          {
            title: 'ROBOXER',
            url: require('~/assets/work/work25.png'),
            period: '2019',
            category: 'Logo',
            id: '14'
          },
          {
            title: 'OUR Shurijo',
            url: require('~/assets/work/work26.png'),
            period: '2019',
            category: 'Logo',
            id: '15'
          },
        ],
        items_square: [{
            title: 'sys-seeing',
            url: require('~/assets/work/work15.png'),
            period: '2018',
            category: 'Logo',
            id: '16'
          },
          {
            title: 'Code for Univ',
            url: require('~/assets/work/work16.png'),
            period: '2019',
            category: 'Logo',
            id: '17'
          },
          {
            title: 'MindHack',
            url: require('~/assets/work/work17.png'),
            period: '2019',
            category: 'Logo',
            id: '18'
          },
          {
            title: 'Rainer',
            url: require('~/assets/work/work18.png'),
            period: '2019',
            category: 'Logo',
            id: '19'
          },
          {
            title: 'Living Roots',
            url: require('~/assets/work/work19.png'),
            period: '2019',
            category: 'Logo',
            id: '20'
          },
          {
            title: 'きたすばる',
            url: require('~/assets/work/work20.png'),
            period: '2019',
            category: 'Logo',
            id: '21'
          },
          {
            title: '東武東上線沿線サミット',
            url: require('~/assets/work/work21.png'),
            period: '2019',
            category: 'Logo',
            id: '22'
          },
          {
            title: '周南工場夜景',
            url: require('~/assets/work/work22.png'),
            period: '2019',
            category: 'Logo',
            id: '23'
          },
          {
            title: 'GIF',
            url: require('~/assets/work/work13.gif'),
            period: '2018',
            category: 'GIF Animation',
            id: '24'
          },
          {
            title: 'Illustration',
            url: require('~/assets/work/work14.jpg'),
            period: '2018-2019',
            category: 'Illustration',
            id: '25'
          },
        ],
      }
    }
  }

</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.down-button{
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.2em;
    padding-top: 70px;
    span{
        position: absolute;
        top: 0;
        left: 50%;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 1px solid $sub-color;
        border-bottom: 1px solid $sub-color;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: sdb 1.5s infinite;
        animation: sdb 1.5s infinite;
        box-sizing: border-box;
    }
}

@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

#first-view{
  position: absolute;
  left: 0;
  top: 0;
  margin-left: $side-content-width;
  padding: 0;
  width: calc(100% - #{$side-content-width});
  height: 100vh;
  z-index: 0;
  color: rgb(237, 168, 179);
  background-color: $main-color;

  h1 {
    text-align: center;
    position: absolute;
    top: 25%;
    left: 80%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 300px;
    white-space: nowrap;
  }

  p {
    text-align: center;
    position: absolute;
    top: 70%;
    left: 20%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 200px;
    white-space: nowrap;
    transition: all .4s;
  }

}

.page-title{
  padding: 32px 1.2em;
  margin-bottom: 32px;
  height: calc(10vh + 32px);
  &:before {
    top: 32px;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
  }
}

.works {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  background-color: $main-color;
  .work {
    width: calc(100%/3);
    height: auto;
    text-align: left; 
    margin: 0;
    padding: 0;
    font-weight: normal;
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: $radius-size;
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      border: 8px solid $main-color;
      box-sizing: border-box;
      pointer-events: none;
    }
    &::after{
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      border: 8px solid $main-color;
      box-sizing: border-box;
      border-radius: calc(#{$radius-size*4});
      pointer-events: none;
    }

    a{
      display: flex;
    }

    &__img{
      width: 100%;
      height: 100%;
      padding: 8px;
      margin: 0;
      object-fit: cover;
      box-sizing: border-box;

      border-radius: calc(#{$radius-size}*4);
      transition: all .1s ease-out;
      z-index: 0;
      position: relative;
      transition: 0.2s cubic-bezier(0.55, 0.05, 0.22, 0.99);
    }

    &__caption{
      opacity: 0;
      background-color: $main-color;
      position: absolute;
      padding: 16px 16px 16px 24px;
      bottom: 16%;
      border-radius: 0 $radius-size $radius-size 0;

      font-size: 1.5vw;
      transition: opacity 0.4s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      &__title{
        font-size: 0.8em;
        letter-spacing: 0.08em; 
        transform: translateX(-50%);
        transition: transform 0.4s cubic-bezier(0.55, 0.05, 0.22, 0.99)0.2s;
      }
      &__category{
        left: -32px;
        transform: translateX(-50%);
        font-size: 0.8em;
        transition: transform 0.4s cubic-bezier(0.55, 0.05, 0.22, 0.99) 0.1s;
      }
    }

    &:hover{
      .work__caption{
        opacity: 1;
        transition: opacity 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);
        &__title{
          transform: translateX(0);
          transition: 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99) 0.2s;
        }
        &__category{
          transform: translateX(0);
          transition: 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99) 0.3s;
        }
      }
      .work__img{
        transform: scale(1.1);
        transition: 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      }
    }
  }

  &__button{
    padding: 16px 0;
    text-align: center;  
    font-size: 1.5em; 
    font-weight: bold;
    border-radius: $radius-size;

    width: 100%;
    margin: 8px;
    background: rgba(0, 0, 0, 0);
    border: 2px solid $sub-color;
    color: $sub-color;
    position: relative;
    z-index: 0;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.55, 0.05, 0.22, 0.99);
    &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $sub-color;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      z-index: -1;
      box-sizing: border-box;
      transition: all 0.4s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      pointer-events: none;
    }
    &:hover{
      // background: $sub-color;
      color: $main-color;
      transition: all 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      &::before{
          -webkit-transform: translateY(0);
          transform: translateY(0);
          transition: all 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);
      }
    }
  }
}

.works:nth-child(3){
  padding-bottom: 160px;
}

#square{
  width: calc(#{$main-content-width}/5);
}

@media screen and (max-width: 1024px) {
  $main-content-width: 100vw;
  .works{
    width: 100%;
    .work{
      width: calc(#{$main-content-width}/2);
      &__caption{
        opacity: 1;
        left: 0;
        font-size: 20px;
        &__title{
          transform: translateX(0);
        }
        &__category{
          transform: translateX(0);
        }
      }
    }
    &:nth-child(3){
      padding-bottom: 32px;
    }
  }

  #square{
    width: calc(#{$main-content-width}/3);
  }

  #first-view{
    margin-left: 0;
    width: 100%;
  }

}

@media screen and (max-width: 480px) {
  .works {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    // padding: 8px;
    .work {
      width: 100%;
      border-radius: 0;

      a{
        justify-content: center;
        align-items: center;
        padding: 8px;
      }

      &__img {
        width: 40%;
        height: auto;
        padding: 0;
        margin: 8px ;
        border-radius: 6px;
      }
      &__caption{
        width: 60%;
        position: relative;
        background-color: rgba(0, 0, 0, 0);
        padding: 8px;
        margin: 0;
        left: 0;
        opacity: 1;
        border-radius: 0;
        font-size: 20px;
        display: block;
      }
      &:hover{
        .work__caption{
          background-color: rgba(0, 0, 0, 0);
          color: $sub-color;
          padding: 8px;
          display: inline-block;
          width: 60%;
          height: 100%;
        }

        .work__img{
          transform: initial;
        }
      }
      &::before{
        display: none;
      }
      &::after{
        display: none;
      } 
    }

    .work:nth-child(even) {
      a{
        background-color: $sub-color;
        color: $main-color;

        flex-direction: row-reverse;
        text-align: right;
      }
      &:hover{
        .work__caption{
          color: $main-color;
        }

        .work__img{
          transform: scale(1.0);
        }
      }
    }

    #square{
      width: 100%;
      &:nth-child(odd){
        a{
          flex-direction: row-reverse;
          background-color: $sub-color;
          color: $main-color;
          text-align: right;
        }
        &:hover{
          .work__caption{
            color: $main-color;
          }

          .work__img{
            transform: scale(1.0);
          }
        }

      }
      &:nth-child(even){
        a{
          flex-direction: row;
          background-color: $main-color;
          color: $sub-color;
          text-align: left;
        }

        .work__caption{
          padding: 8px;
        }

      }
      &:hover{
        .work__caption{
          color: $sub-color;
        }

        .work__img{
          transform: scale(1.0);
        }
      }
    }
    &__button{
      width: 100%;
      margin: 16px;
      background: $main-color;
      border: 2px solid $sub-color;
      color: $sub-color;
      font-size: 6vw;
    }
  }
}

</style>
