<template lang="pug">
.container
  #page-wrap
    .main-content#special
      h2.page-title p5.js

    #p5Canvas
</template>

<script>

export default {
    mounted() {
        const script = function (p5) {
            var speed = 2;
            var posX = 0;

            let body, rhand, lhand, rfoot, lfoot;
            let angle = 0.0;
            let sign = 0.1;
            let x = 0;
            let y = 0;

            let drawPart = (im, x, y, ang) => {
                p5.push();
                p5.translate(x, y);
                p5.rotate(ang);
                p5.image(im, 0, 0)
                p5.pop();
            };

            p5.preload = _ => {
                body = p5.loadImage('/special/body.png');
                rhand = p5.loadImage('/special/hand-right.png');
                lhand = p5.loadImage('/special/hand-left.png');
                rfoot = p5.loadImage('/special/foot-right.png');
                lfoot = p5.loadImage('/special/foot-left.png');
            }
            p5.setup = _ => {
                var canvas = p5.createCanvas(800, 500)
                canvas.parent("p5Canvas");
                p5.imageMode(p5.CENTER);
            }

            p5.draw = _ => {
                p5.background(238);

                x = p5.lerp(x, p5.mouseX, 0.05);
                y = p5.lerp(y, p5.mouseY, 0.05);

                p5.translate(p5.width / 2, p5.height / 2);

                p5.push();
                p5.image(body, x/20 - 35, y/20 - 20);
                p5.pop();

                drawPart(rhand, 150 + x/5, -100 + y/5, angle);
                drawPart(lhand, -150 - x/5, 50 - y/5, -angle);
                drawPart(rfoot, 100 + x/8, 130 + y/8, angle + .5);
                drawPart(lfoot, -80 - x/8, 160 + y/8, -angle);

                angle +=  0.001 * (p5.mouseX - p5.pmouseX)
            }
        }
        const P5 = require('p5')
        new P5(script)
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
