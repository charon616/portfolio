<template>
  <div>
    <Menu />
    <div id="page-wrap">
      <div class="main-content" id="about">
        <h1>{{ error.statusCode }}</h1>
        <p v-if="error.statusCode === 404">
        ページが見つかりません。。
        </p>
        <p v-else>
        エラーが発生しました。。
        </p> 
        </div>
    </div>
    <CursorComponent />
  </div>
</template>

<script>
import Menu from '~/components/TheMenu.vue';
import CursorComponent from '~/components/CursorComponent.vue';

export default {
    components: {
        CursorComponent,
        Menu
    },
    props: {
        error: {
        type: Object,
        default: null
        }
    }
}
</script>

<style scoped>

.main-content {
  margin-top: 64px;
  text-align: center;
  line-height: 1.75;
}

h1{
    font-size: 2.2em;
}

p{
    font-size: 1.2em;
}
</style>

