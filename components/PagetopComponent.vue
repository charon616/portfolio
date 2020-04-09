<template>
    <transition name="fade">
        <div id="pagetop" class="fixed right-0 bottom-0" v-show="scY > 900" @click="toTop">
            <span class="top-button"><font-awesome-icon icon="long-arrow-alt-up"/></span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            scTimer: 0,
            scY: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: function () {
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.top-button{
  background-color: $sub-color;
  color: white;
  font-size: 1.7em;
  text-align: center;
  line-height: 8vmin;

  position: fixed;
  bottom: 8vmin;
  right: 8vmin;
  width: 8vmin;
  height: 8vmin;

  border-radius: $radius-size;
  border: 2px solid rgba(46, 255, 192, 1);
  box-sizing: border-box;
  background-color: rgba(46, 255, 192, 1);
  color: $sub-color;

  z-index: 90;
  transition: all 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);

  &::after{
    content: "";
    width: 90%;
    height: 90%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid $sub-color;
    box-sizing: border-box;
    border-radius: 50%;
    top: 5%;
    left: 5%;
    position: absolute;
    opacity: 0;
    transition: all 0.7s cubic-bezier(0.55, 0.05, 0.22, 0.99);
  }

  &:hover{
    border-radius: 50%;
    i{
        animation: rotate 2s cubic-bezier(0.55, 0.05, 0.22, 0.99) infinite;
    }
    &::after{
        opacity: 1;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes rotate {
  0%   { transform: rotate(0deg); }
  50%  { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
}

@media screen and (max-width: 1024px) {
  .top-button{
    line-height: 10vmin;
    bottom: 8vmin;
    right: 8vmin;
    width: 10vmin;
    height: 10vmin;
  }
}

@media screen and (max-width: 480px) {
    .top-button{
        line-height: 60px;
        bottom: 8vmin;
        right: 8vmin;
        width: 60px;
        height: 60px;
    }
}
</style>