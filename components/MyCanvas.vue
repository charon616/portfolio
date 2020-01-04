<template>
    <canvas class="canvas"></canvas>
</template>

<script>
export default {
  methods: {
    draw() {
        this.ctx.font = "64px sans-serif";
        this.ctx.fillText("Portfolio", 20, 60);
    }
  },
  mounted() {
    this.ctx = this.$el.getContext('2d')
    this.draw()
  }
}
</script>

<style scoped>
.canvas {
    width: 400px;
    height: 300px;
    background: powderblue;
    color: pink;
  border: 1px solid #000;
}
</style>