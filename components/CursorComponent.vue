<template>
    <div class="cursor">
        <span class="cursor__main" id="cursor-main" v-bind:style="styles"></span>
        <span class="cursor__stalker" id="cursor-stalker"></span>
    </div>
</template>

<script>
import { green } from 'color-name';

export default {
  data(){
    return{
      styles: {
        transform: 'translate(80px,80px)',
      },
      hovFlag: false
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.mouse);
  },
  methods: {
    mouse: function(e){ 
      let main = document.getElementById('cursor-main');
      let stalker = document.getElementById('cursor-stalker');
      // styles.background = "green";
      main.style.transform= 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      if(!this.hovFlag){
        stalker.style.transform= 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
      }
    },
    applyTransform: function(){
      return "translate(80px, 70px)";
    }
  },
  destroyed() {
    window.removeEventListener('mousemove', this.mouse);
  }
}
</script>

<style scoped lang="stylus">

.cursor
  position relative
  z-index 150
  pointer-events none
  &__main
    border-radius 50%
    background-color rgba(46, 255, 192, 1)
    position fixed
    top -6px 
    left -6px
    width 12px
    height 12px
    z-index 2
    transform translate(0,0)
    pointer-events none
    // transition transform 0.2s ease-out
  &__stalker
    border-radius 50%
    background-color rgba(50, 50, 50, 0.25)
    position fixed
    top -6px 
    left -6px
    width 12px
    height 12px
    z-index 1
    transition transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s
    transition-timing-function ease-out
    pointer-events none
    &.hov_
      background-color rgba(50, 50, 50, 0.25)
      top -32px     
      left -32px   
      width 64px
      height 64px
      transition all .2s ease-out

+tb()
  .cursor
    display none

</style>