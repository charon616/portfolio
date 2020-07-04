<template lang="pug">
.container
  .main(:style="{ background: background_color}")
    img(:src="url" :alt="url")
    ul.color
      li.color__item(v-for="(rgb, id) in model_rgb_colors" :key="id" :style="{ background: rgb}") 
    .textbox(:style="{ color: txt_color}")
      h3 いい感じの色になるように
      p 抽出したカラーパレットを元にして
      p 文章の色を変えてみてます
      p 実装には
      p node-vibrantというパッケージを使いました

</template>
<script>
import Vibrant from 'node-vibrant';

export default {
  layout: 'wide',
  components: {
    Vibrant
  },
  data(){
    return{
      model_colors: [],
      model_rgb_colors: [],
      background_color: "#fff",
      txt_color: "#000",
      url: "/test.jpg"
    }
  },
  watch: {
    model_colors: function(val){
      let arr = [] 
      for (let i=0; i < val.length; i++){
        let rgb = 'rgb(' + val[i][0] + ',' + val[i][1] + ',' + val[i][2] + ')'
        arr.push(rgb)
      }
      this.model_rgb_colors = arr

      this.background_color = this.model_rgb_colors[0]

      const limit_min = 2.0 // コントラストの閾値
      let txt_color = null

      for (let j=1; j < val.length; j++){
        let cont = this.calcContrast(val[0], val[j])
        if(cont >= limit_min){
          // コントラストが閾値以上ならテキストの色を決定
          txt_color = this.model_rgb_colors[j]
          this.txt_color = txt_color
          break
        }
      }
      // 代表色を全て探索してコントラストが閾値以上になる色がなければ白か黒にする
      if(txt_color == null){
        if(this.calcContrast(val[0], [255, 255, 255]) >= limit_min){
          this.txt_color = "#fff"
        }else{
          this.txt_color = "#000"
        }
      }
    }
  },
  methods: {
    getColor: function (img_path) {
      let self = this
      Vibrant.from(img_path).getPalette()
        .then(function (palette) {
          let arr = Object.keys(palette).map(function (key) {
            return palette[key]._rgb
          })
          self.model_colors = arr
        });
    },
    // 相対輝度
    luminanace: function(r, g, b){
      r /= 255
      g /= 255
      b /= 255
      if(r <= 0.03928){
        r /= 12.92
      }else{
        r = Math.pow((r + 0.055) / 1.055, 2.4)
      }
      return r * 0.2126 + g * 0.7152 + b * 0.0722
    },
    // コントラストの計算
    calcContrast: function(rgb1, rgb2){
      const lum1 = this.luminanace(rgb1[0], rgb1[1], rgb1[2])
      const lum2 = this.luminanace(rgb2[0], rgb2[1], rgb2[2])
      const brightest = Math.max(lum1, lum2)
      const darkest = Math.min(lum1, lum2)
      return (brightest + 0.05) / (darkest + 0.05)
    }
  },
  created(){
    this.getColor(this.url)
  }
}
</script>
<style scoped lang="stylus">
.container
  width 100%
  display flex
  justify-content center
  align-items center
  background #fff

.main
  width 800px
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 32px 0
  border-radius 16px

img
  width 400px
  height auto

.color 
  list-style none
  display flex
  flex-direction row
  justify-content center
  align-items center
  margin 8px 0
  &__item
    width 40px
    height 40px 
    border-radius 50%
    border 1px solid #fff
    margin 16px

.textbox
  width 400px
</style>