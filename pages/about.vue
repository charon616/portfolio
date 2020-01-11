<template>
  <div class="container">
    <div id="page-wrap">
      <div class="main-content" id="about">
        <h2 class="page-title" >ABOUT</h2>

        <div class="profile-illust">
          <img src="~assets/photo/DSC01678.JPG">
        </div>
        
        <div class="text-box">
        <h3>KIHO Karin</h3>
          <p>Designer | Engineer</p>
          <p style="letter-spacing: .2em;">1996.6.16<p>

          <p class="space">
            東京大学大学院 学際情報学府 学際情報学専攻 <br/>先端表現情報学コース 苗村研究室所属
          </p>
          <!-- <p>
            大学のフリーペーパー制作サークルでデザインを始め、いつの間にか夢中に。大学院では将来の人間のコミュニケーションのあり方や新しいエンターテイメントの可能性を探りつつ、先端芸術的な表現のためのスキルや知識を身に付けたい。
          </p> -->
          <!-- <h3>Skill</h3> -->
          <p class="space">Design --- グラフィック全般。特にエディトリアル、UI。</p>
          <p>Programming --- C++、Python、Unity、Webフロント系言語など。
          </p>
          <p>Research --- HCI、視線計測、デザインツールなど。</p>

          <p class="space">karinkiho616 [at] g.ecc.u-tokyo.ac.jp</p>
          <a class="btn-facebook space" style="margin-right: 8px;" href="https://www.facebook.com/karinkiho" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="btn-instagram space" href="https://www.instagram.com/june_giraffe/?hl=ja" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <i class="fab fa-instagram"></i>
          </a>
          <a class="simple-link" href="https://gifmagazine.net/users/71554/profile?locale=ja" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">GIF MAGAZINE</a>
          <a class="simple-link" href="https://pin.it/z3obxmhah4juvm" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">Pinterest</a>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
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

.simple-link{
  display: block;
  text-decoration: underline;
  &:hover{
    color: $accent-color;
  }
}

.profile-illust{
  width: 100%;
  height: 180px;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
}

.main-content {
  margin-top: 0;

  text-align: center;
  line-height: 1.75;
}

// #about {
//   margin-top: 0;
//   text-align: center;
//   line-height: 1.75;
//   // width: 60%;
// }

.text-box{
  width: 60%;
  margin: 24px auto;
  h3{
    font-size: 1.6em;
    font-weight: normal;
    letter-spacing: .1em;
    margin-bottom: 8px;
  }
}

.space{
  margin-top: 16px;
}
  
.btn-instagram{
  font-size: 2.0em;
  transition: all .3s ease-out;

  &:hover{
    color: #CF2E92;
  }
}
.btn-facebook{
  font-size: 2.0em;
  transition: all .3s ease-out;

  &:hover{
    color: #1877f2;
  }
}
.btn-pinterest{
  font-size: 2.0em;
  transition: all .3s ease-out;

  &:hover{
    color: #E60023;
  }
}

.history{
  margin: 20px 0px 30px;
}

@media screen and (max-width: 480px) {
  .profile-illust{
    height: 120px;
  }
  .text-box{
    margin: 18px auto 0;
    width: 90%;
  }
  br{
    line-height: 2;
  }
  .space{
    margin-top: 8px;
  }
}

</style>
