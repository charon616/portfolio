<template lang="pug">
.container
    .main-content#work
        h2.page-title WORK

        vue-card-stack.stack(:cards="cards" :stack-width="360" :card-width="280" :maxVisibleCards="5")
            h1 test
            h2 test
            //- template.template(v-slot:card="{ card }")
            //-     .test(style="width: 100%; height: 100%;" :style="{ background: '#ffffff' }")
            //-         //- card(:key="`first-${index}`" :item="item" :index="index+1")
            //-         card(:item="card")
        
</template>

<script>
import stackcard from "~/components/stackcard.vue";
import jsonfile from "~/assets/work/works.json";
import VueCardStack from 'vue-card-stack';

export default {
  components: {
    stackcard,
    VueCardStack
  },
  methods: {
    mouseover: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.add("hov_");
    },
    mouseleave: function() {
      let stalker = document.getElementById("cursor-stalker");
      stalker.classList.remove("hov_");
    }
  },
  data() {
    return {
      cards: [
        {
            title: "推しの情報を集めるwebアプリ",
            cover: "work34.png",
            period: "2020",
            category: ["Web App"],
            cat_search: ["Web/UI", "Other"]
        },
        {
            title: "HONGO TECH GARAGE",
            cover: "work33.png",
            period: "2020",
            category: [ "Web", "Logo" ],
            cat_search: [ "Web/UI", "Logo" ]
        },
        {
            title: "Todai To Texas 2020",
            cover: "work31.jpg",
            period: "2020",
            category: [ "Space", "Web"],
            cat_search: ["Web/UI", "Other"]
        },
        {
            title: "東京大学制作展アーカイブ",
            cover: "work30.jpg",
            period: "2020",
            category: [ "Booklet"],
            cat_search: [ "Printing" ]
        },
        {
            title: "東京大学制作展2019",
            cover: "work1.jpg",
            period: "2019",
            category: ["Poster", "Pamphlet"],
            cat_search: ["Printing"],
        },
        {
            title: "AR-ZINE",
            cover: "work2.jpg",
            period: "2019",
            category: ["AR App"],
            cat_search: ["Web/UI"],
        },
        {
            title: "東京大学制作展EXTRA 2019",
            cover: "work3.jpg",
            period: "2019",
            category: ["Poster"],
            cat_search: ["Printing"],
        },
        {
            title: "存在を積み上げる地図",
            cover: "work4.jpg",
            period: "2019",
            category: ["Media Art"],
            cat_search: ["Other"],
        },
        {
            title: "東京大学制作展2017",
            cover: "work5.jpg",
            period: "2017",
            category: ["Web"],
            cat_search: ["Web/UI"],
        },
        {
            title: "biscUiT",
            cover: "work6.jpg",
            period: "2015-2018",
            category: ["Free Paper"],
            cat_search: ["Printing"],
        },
        {
            title: "魅る文字",
            cover: "work7.jpg",
            period: "2019",
            category: ["Free Paper"],
            cat_search: ["Printing"],
        },
        {
            title: "Web Portfolio",
            cover: "work8.jpg",
            period: "2019",
            category: ["Web"],
            cat_search: ["Web/UI"],
        },
        {
            title: "名刺",
            cover: "work28.jpg",
            period: "2019",
            category: ["Printing"],
            cat_search: ["Printing"],
        },
        {
            title: "苗村研究室 Open House 2020",
            cover: "work27.jpg",
            period: "2019",
            category: ["Web"],
            cat_search: ["Web/UI"],
        },
        {
            title: "unlock",
            cover: "work9.jpg",
            period: "2019",
            category: ["UI"],   
            cat_search: ["Web/UI"],
        },
        {
            title: "yumemo",
            cover: "work10.jpg",
            period: "2018",
            category: ["UI"],
            cat_search: ["Web/UI"],
        }
        // {
        //     title": "YAC2018",
        //     cover": "work11.jpg",
        //     period": "2018",
        //     category": ["Banner"],
        //     cat_search": ["Web/UI"],
        // },
        // {
        //     title": "AMPM",
        //     cover": "work12.jpg",
        //     period": "2018",
        //     category": ["Animation"],
        //     cat_search": ["Other"],
        // },
        // {
        //     title": "成年年齢引下げ告知ポスター",
        //     cover": "work29.jpg",
        //     period": "2020",
        //     category": ["Poster"],
        //     cat_search": ["Printing"],
        // },
        // {
        //     title": "UmeeT",
        //     cover": "work23.jpg",
        //     period": "2017",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "Syrinx",
        //     cover": "work24.jpg",
        //     period": "2019",
        //     category": ["Logo", "Web"],
        //     cat_search": ["Logo", "Web/UI"],
        // },
        // {
        //     title": "ROBOXER",
        //     cover": "work25.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "YANEKARA",
        //     cover": "work32.png",
        //     period": "2020",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "OUR Shurijo",
        //     cover": "work26.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "Code for Univ",
        //     cover": "work16.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "MindHack",
        //     cover": "work17.png",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "Rainer",
        //     cover": "work18.png",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "Living Roots",
        //     cover": "work19.png",
        //     period": "2019",
        //     category": ["Logo", "Card"],
        //     cat_search": ["Logo", "Printing"],
        // },
        // {
        //     title": "sys-seeing",
        //     cover": "work15.jpg",
        //     period": "2018",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "きたすばる",
        //     cover": "work20.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "東武東上線沿線サミット",
        //     cover": "work21.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "周南工場夜景",
        //     cover": "work22.jpg",
        //     period": "2019",
        //     category": ["Logo"],
        //     cat_search": ["Logo"],
        // },
        // {
        //     title": "GIF",
        //     cover": "work13.jpg",
        //     period": "2018",
        //     category": ["GIF Animation"],
        //     cat_search": ["Other"],
        // },
        // {
        //     title": "Illustration",
        //     cover": "work14.jpg",
        //     period": "2018-2019",
        //     category": ["Illustration"],
        //     cat_search": ["Other"],
        // },
        // {
        //     title": "Illustration",
        //     cover": "work35.png",
        //     period": "2020",
        //     category": ["Illustration"],
        //     cat_search": ["Other"],
        // }
      ]
    };
  }
};
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
