<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: ['name', 'score', 'color'],
  data(){
    return {
      clr: this.$colors.sub
    }
  },
  mounted () {
    let txt = this.name;
    // let color = this.color;
    let color = this.clr
    this.addPlugin({
      afterDraw(chart, go) {
        let ctx = chart.ctx
        let fontSize;
        // 中央にテキスト表示
        if(txt.length > 5){
          fontSize = 12;
        }else{
          fontSize = 18;
        }
        let fontStyle = 'bold';
        let fontFamily = 'Lato';
        ctx.fillStyle = color;
        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // position(第二, 第三引数は適宜調整)
        ctx.fillText(txt, chart.width / 2 , chart.height / 2);
      }
    }),
    this.renderChart(
      {
        datasets: [
          {
            data: [this.score, 100-this.score],
            backgroundColor: [this.clr, '#EEEEEE'],
            hoverBackgroundColor: [this.clr, '#EEEEEE'],
            hoverBorderColor: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
            hoverBorderWidth: [0, 0],
            borderColor: 'transparent'
          }
        ]
      }, 
      {
        legend: { display: false },
        cutoutPercentage: 80,
        animation: {
          animateScale: true
        },
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        }
      }
    )
  }
}
</script>