<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title 端末の傾きを取得
      p.plane-txt いずれやります。
      button(@click="click") test

      #ex_orientation {{comment}}
      p x:{{ acceleration.x }}
      //- p y:{{ acceleration.y }}
      //- p z:{{ acceleration.z }}


</template>
<script>
import { useDeviceMotion } from 'vue-use-web';

export default {
  setup() {
    const { acceleration, rotationRate } = useDeviceMotion();
    return { acceleration, rotationRate };
  },
  data() {
      return{
        comment: "さいしょ",
        test: "",
        acceleration: "" 
      }
  },
  methods: {
    click: function(){
      this.comment = "click"
    },
    motion: function(e){
      this.comment = e.accelerationIncludingGravity.x;   
      
    },
    orientation: function(e){
      this.comment = e.accelerationIncludingGravity.x;
    }
  },
  mounted() {
    // window.addEventListener('devicemotion', this.motion, true);

    console.log(this.acceleration.x);
    alert(this.acceleration.x)

    window.addEventListener("devicemotion", (e) => {
        aX = e.acceleration.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
        aY = e.acceleration.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
        aZ = e.acceleration.x;    // z軸の重力加速度（Android と iOSでは正負が逆）
        this.comment = aX;
    });
  }
}
</script>
<style scoped lang="stylus">
#page-wrap
  margin 0 auto

.plane-txt 
  text-align center
  font-size 1.2em

.main-content 
  margin-top 0
  margin-bottom 64px
  line-height 2.0
  text-align center

.page-title
  width 360px

.link-button
  margin-top 80px
  width 50%
  padding 16px

+sp()
  .page-title
    width 360px
    max-width 80%

    &__body
      p
        width 400px
      img
        width 100%

</style>