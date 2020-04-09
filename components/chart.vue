<script>
import { HorizontalBar } from 'vue-chartjs'
export default {
  extends: HorizontalBar,
  data(){
    return {
      chartdata: {
        labels: ['Illustrator', 'Photoshop', 'Lightroom', 'XD', 'AfterEffects', 'CINEMA 4D'],
        datasets: [
          {
            label: ['Data One'],
            data: [80, 60, 50, 60, 30, 10],
            backgroundColor: 'rgba(99, 50, 246, 1)',
            hoverBackgroundColor: 'rgba(99, 50, 246, 1)',
            // barThickness: 16,
            barPercentage: 0.5,
            categoryPercentage: 0.5
            // borderColor: 'rgba(99, 50, 246, 1)',
            // borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
            display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          // x軸に関して
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true, // 0からスタートするか
              stepSize: 10, // 目盛りの間隔
              // callback: function (label, index, labels) {
              //   return label + ' %'; // ラベルに'点'を付ける
              // },
              min: 0,
              max: 100
            }
          }],
          // y軸に関して
          yAxes: [{
            gridLines: {
              display: false
            }
          }],
        },
        tooltips: {
          enabled: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return tooltipItem.yLabel + ' 点'; // ツールチップに'点'を付ける
            }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>