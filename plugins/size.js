import Vue from 'vue'

Vue.directive('size', {
  bind(el, binding, vnode) {
    el.style.gridRow = 'span ' + binding.value.height;
    el.style.gridColumn = 'span ' + binding.value.width;
    // el.style.width = binding.value;
  }
})