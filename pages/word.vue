<template lang="pug">
.container
    .main-content#work
        h2.page-title WORK

        vue-word-cloud(:words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]")
          template(slot-scope="{text, weight, word}")
            .content(:title="weight" style="cursor: pointer;" @click="onWordClick(word)") {{ text }}

</template>

<script>
import jsonfile from "~/assets/work/works.json";
import VueWordCloud from 'vuewordcloud';

export default {
  components: {
    VueWordCloud
  },
  methods: {
    mouseover: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.add("hov_");
    },
    mouseleave: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.remove("hov_");
    },
    onWordClick: function(word){
      console.log(word)
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
.main-content
  margin-top 0
  margin-bottom 64px
  line-height 1.75
  width 100%

.stack
    margin  0 auto
</style>