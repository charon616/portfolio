<template lang="html">
   <!-- <div ref="lottieRef"></div> -->
   <div :style="style" ref="lavContainer"></div>

  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
import lottie from 'lottie-web';

// export default {
//    props: {
//        options: {
//            type: Object,
//        }
//    },
//    mounted () {
//        this.lottie = lottie.loadAnimation({
//            container: this.$refs.lottieRef,
//            renderer: 'svg',
//            loop:  true,
//            autoplay: false,
//            animationData: this.options.lottieData.default,
//        });
//        this.$emit('lottieCreated', this.lottie)
//    }
// }

export default {
  loading: false,
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number,
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },
  mounted () {
    this.anim = lottie.loadAnimation({
        container: this.$refs.lavContainer,
        renderer: 'svg',
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,
        animationData: this.options.animationData.default,  // ここだけ変更何故かデフォルトを入れないと動かなかった… (要検証)
        rendererSettings: this.options.rendererSettings
      }
    );
    this.$emit('animCreated', this.anim)
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>