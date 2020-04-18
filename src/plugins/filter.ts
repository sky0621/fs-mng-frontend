import Vue from 'vue'

Vue.filter('scale', function (val: string): string {
  return val + ' 秒'
})
