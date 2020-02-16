<template>
  <div class="container">
    <div id="page-wrap">
      <div class="main-content" id="special">
        <h2 class="page-title" >SPECIAL</h2>

        <div class="special">
          <p style="display: block; width: 100%; text-align: center; margin-bottom: 32px;">いろんな実装を試したり自己紹介したりする場所。</p>
          <nuxt-link class="special__link" to="/special/article" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave">
            <img class="special__link__img" src="~assets/special/logo2.png">
          </nuxt-link>
          <nuxt-link class="special__link" to="/special/book" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave">
            <img class="special__link__img" src="~assets/special/book.png">
          </nuxt-link>
          <nuxt-link class="special__link" to="/special/self" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave">
            <img class="special__link__img" src="~assets/special/self.png">
          </nuxt-link>
        </div>

        <!-- <kinesis-container>
          <kinesis-element :strength="300" type="translate" axis="x">
            <h1>KIHO Karin</h1>
          </kinesis-element>
        </kinesis-container> -->

      </div>
    </div>
  </div>

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis';


export default {
  components: {
    KinesisContainer, 
    KinesisElement
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
<style scoped lang="scss">
@import "~assets/scss/variables";

.main-content {
  margin-top: 0;
  // margin-bottom: 64px;
  margin-bottom: 2000px;
  line-height: 1.75;
}

.special{
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  p{
    text-align: left;
  }
  &__link{
    width: calc(100%/6);
    height: auto;
    position: relative;
    overflow: hidden;
    display: block;
    border-radius: $radius-size;
    &__img{
      width: 100%;
      height: 100%;
      padding: 8px;
      object-fit: cover;
      box-sizing: border-box;
      border-radius: calc(#{$radius-size}*4);
      position: relative;
    }
  }
}

@media screen and (max-width: 1024px) {
  $main-content-width: 100vw;

  .special{
    width: 100%;
    &__link{
      width: calc(#{$main-content-width}/2);
    }
  }
}

</style>