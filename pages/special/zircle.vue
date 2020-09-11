<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title zircle
      p.plane-txt test
    //-   z-canvas(:views='$options.components')
</template>

<script>
import zircle from 'zircle'
import 'zircle/dist/zircle.css'

const foo = {
  template: '#foo'
}
const bar1 = { 
  template: '#bar1',    
};
const bar1bar1 = { 
  template: '#bar1bar1',    
};
const bar2 = { 
  template: '#bar2',    
};
const bar2bar1 = { 
  template: '#bar2bar1',    
};
const bar2bar2 = { 
  template: '#bar2bar2',    
};
 

export default {
    components: {
        foo,
    bar1,
    bar1bar1,
    bar2,
    bar2bar1,
    bar2bar2,
        zircle
    },
    mounted () {
        // this.$zircle.config({
        //     mode: 'mixed',
        //     style: {
        //         theme: 'white'
        //     }
        // })
        // this.$zircle.setView('foo')
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
