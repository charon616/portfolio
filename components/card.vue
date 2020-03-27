<template lang="pug">
.card(v-show = "item.display" v-size = "{ width: item.width, height: item.height }")
    nuxt-link(:to="{ name: 'work-id', params: { id: item.id } }")
        img.card__img(v-lazy="url[index]" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
        .card__caption(v-on:mouseover="mouseover" v-on:mouseleave="mouseleave")
            h3.card__caption__title {{ item.title }}
            span.card__caption__category
                span(v-for="(cat, id) in item.category" :key="id") {{cat}}
            span.card__caption__period {{ item.period }}
    
</template>
<script>
export default {
 props: ['item', 'index'],
 data() {
    return {
        url: [ 
          require('~/assets/work/work31.jpg'), 
          require('~/assets/work/work30.jpg'),
          require('~/assets/work/work1.jpg'), 
          require('~/assets/work/work2.jpg'),
          require('~/assets/work/work3.jpg'),
          require('~/assets/work/work4.jpg'),
          require('~/assets/work/work5.jpg'),
          require('~/assets/work/work6.jpg'),
          require('~/assets/work/work29.jpg'),
          require('~/assets/work/work7.jpg'),
          require('~/assets/work/work8.jpg'),
          require('~/assets/work/work27.jpg'),
          require('~/assets/work/work9.jpg'),
          require('~/assets/work/work10.jpg'),
          require('~/assets/work/work11.jpg'),
          require('~/assets/work/work12.jpg')
        ]
    }
 }
}
</script>