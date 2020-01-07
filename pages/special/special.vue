<template>
  <div class="container">
    <div id="page-wrap">
      <div class="main-content" id="special">
        <h2 class="page-title" >SPECIAL</h2>

        <div id="app">
    <button id="btn" v-on:click="omikuji">ボタン</button>
    <div>{{result}}</div>
</div>



      </div>
    </div>
  </div>

</template>
<script>
export default {
    data() {
        return{
            result:"ボタンを押すとここにおみくじの結果が出るよ",
            omikujiResult:["大吉","中吉","小吉","凶"]
        }
    },
    methods: {
        omikuji: function(){
            const num = Math.floor(Math.random()*this.omikujiResult.length);
            this.result = this.omikujiResult[num];
        }

    }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/variables";

.main-content {
  margin-top: 0;

  text-align: center;
  line-height: 1.75;
}

</style>