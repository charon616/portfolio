import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.1,
  attempt: 1,
  error: '~/assets/error.png',
  loading: '~/assets/loading.gif',
  observer: true,

  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
});