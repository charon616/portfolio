import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.1,
  attempt: 1,
  error: 'error.png',
  loading: 'loading.gif',
  observer: true,
  lazyComponent: true,

  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
});