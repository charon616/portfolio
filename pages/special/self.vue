<template>
  <div class="container">
    <div id="page-wrap">
      <div class="main-content" id="special">
        <h2 class="page-title">自己紹介</h2>
        
        <div class="self">
            <kinesis-container>
                <kinesis-element :strength="5" type="depth" class="card" >
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="出身地は？" 
                        textSizeFront="1.6em"
                        back="宮崎生まれ、茨城育ち"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="最近読んだ本" 
                        textSizeFront="1.6em"
                        back="『82年生まれ、キム・ジヨン』"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6"
                        imgBack="https://images-fe.ssl-images-amazon.com/images/I/41Thb8BtEcL.jpg">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="好きなデザイナー" 
                        textSizeFront="1.6em"
                        back="寄藤文平さん、川谷康久さん"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="おすすめのマンガ" 
                        textSizeFront="1.6em"
                        back="『青野くんに触りたいから死にたい』、『社畜と幽霊』"
                        textSizeBack="1.2em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="好きな映画" 
                        textSizeFront="1.6em"
                        back="ピンポン、Les Miserables"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="好きなPV" 
                        textSizeFront="1.6em"
                        back="ピンポン、Les Miserables"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="好きな雑誌" 
                        textSizeFront="1.6em"
                        back="WIRED、GISELe"
                        textSizeBack="1.6em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="よく使うアプリ" 
                        textSizeFront="1.6em"
                        back="Spotify、Nike Run Club"
                        textSizeBack="1.2em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
                <kinesis-element :strength="5" type="depth" class="card">
                    <vue-flashcard 
                        class="flashcard__info"
                        headerFront=""
                        headerBack=""
                        colorBack="#6332f6"
                        front="感動したPV" 
                        textSizeFront="1.6em"
                        back="記念撮影、お気に召すまま、東京喰種:re"
                        textSizeBack="1.2em"
                        colorTextFront="#6332f6">
                    </vue-flashcard>
                </kinesis-element>
            </kinesis-container>
        <nuxt-link to="/special" class="link-button" v-on:mouseover.native="mouseover" v-on:mouseleave.native="mouseleave" >←　戻る</nuxt-link>
        </div>



      </div>
    </div>
  </div>

</template>
<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis';
import vueFlashcard from 'vue-flashcard';

export default {
    components: {
        KinesisContainer, 
        KinesisElement,
        vueFlashcard
    },
    methods: {
        mouseover: function(){ 
        let stalker = document.getElementById('cursor-stalker');
        stalker.classList.add('hov_');
      },
      mouseleave: function(){
        let stalker = document.getElementById('cursor-stalker');
        stalker.classList.remove('hov_');
      }
    }
}
</script>
<style scoped lang="scss">
@import "~assets/scss/variables";

.container{
  background-color: $bg-color;
}

.main-content {
  margin-top: 0;
  margin-bottom: 64px;
  line-height: 2.0;
}

.self{
    text-align: center;
    .card{
        width: calc(#{$main-content-width - 2vw}/3);
        display: inline-block;
    }
}

.page-title{
  width: 360px;
  max-width: 80vw;
}

.link-button{
    margin: 80px auto 32px;
    padding: 16px;
    width: calc(#{$main-content-width - 2vw}/3);
}

@media screen and (max-width: 480px) {
    .self{
        .card{
            width: 90%;
        }
    }
    .link-button{
        width: 50%;
    }
}

</style>

<style lang="scss">
.flashcard {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2) !important;
    color: deeppink;
    &:hover{
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2) !important;
    }
    img {
        width: 60% !important;
        max-width: 200px;
        height: auto;
    }
    margin: 16px !important;
}
</style>