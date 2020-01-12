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
        <h4>キホウ カリン</h4>
          <p class="space">Designer | Engineer</p>
          <p>1996.6.16<p>

          <p class="space">
            東京大学大学院 学際情報学府 学際情報学専攻 <br/>先端表現情報学コース 苗村研究室所属
          </p>
          <!-- <p>
            大学のフリーペーパー制作サークルでデザインを始め、いつの間にか夢中に。大学院では将来の人間のコミュニケーションのあり方や新しいエンターテイメントの可能性を探りつつ、先端芸術的な表現のためのスキルや知識を身に付けたい。
          </p> -->
          <!-- <h3>Skill</h3> -->
          <p class="space"><span>Design</span> グラフィック全般。特にエディトリアル、UI。</p>
          <p><span>Programming</span> C++、Python、Unity、Webフロント系言語など。
          </p>
          <p><span>Research</span> HCI、視線計測、デザインツールなど。</p>

          <p class="space">karinkiho616 [at] g.ecc.u-tokyo.ac.jp</p>
          <a class="btn-facebook space" style="margin-right: 8px;" href="https://www.facebook.com/karinkiho" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a class="btn-instagram space" href="https://www.instagram.com/june_giraffe/?hl=ja" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a class="btn-pinterest space" href="https://pin.it/z3obxmhah4juvm" role="button" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            <font-awesome-icon :icon="['fab', 'pinterest']" />
          </a>
          <a class="simple-link" href="https://gifmagazine.net/users/71554/profile?locale=ja" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">GIF MAGAZINE</a>
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
    },
    mounted() {
      Typekit.load({async: true})
    }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/variables";

.container{
  background-color: $bg-color;
}

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
  line-height: 1.75;
}

.text-box{
  font-family: 'Lato', 'Source Sans Pro', a-otf-gothic-bbb-pr6n, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; 
  font-weight: 400;
  font-style: normal;

  width: 60%;
  margin: 24px auto;
  h3{
    font-size: 1.6em;
    font-weight: normal;
    letter-spacing: .1em;
    margin-bottom: -6px;  
  }
  h4{
    letter-spacing: .1em;
  }
  span{
    font-size: 0.8em; 
    font-weight: bold;
    padding: 4px;
    background: $sub-color; 
    color: white;
    border-radius: 2px;
  }
}

.space{
  margin-top: 12px;
}
  
.btn-instagram{
  font-size: 1.8em;
  transition: all .3s ease-out;

  &:hover{
    color: #CF2E92;
  }
}
.btn-facebook{
  font-size: 1.8em;
  transition: all .3s ease-out;

  &:hover{
    color: #1877f2;
  }
}
.btn-pinterest{
  margin-left: 6px;
  font-size: 1.8em;
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
    span{
      display: block;
      background: none;
      color: $sub-color;
      border-bottom: 1px solid $sub-color;
      border-radius: 0;
      padding: 4px 0 0; 
    }
  }
  br{
    line-height: 2;
  }
  .space{
    margin-top: 8px;
  }
}

</style>
