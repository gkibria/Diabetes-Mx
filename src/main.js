import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import App from './App.vue'
import VueFilter from 'vue-filter'
import VueProgressBar from 'vue-progressbar'
// import {fireInit} from './helpers/firebase'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueFilter);
Vue.use(VueProgressBar, {
  color: 'rgb(224, 13, 55)',
  failedColor: 'red',
  height: '3px',
});
const router = new VueRouter({
  mode: 'history',
  routes,
});

var loggedIn = true;

router.beforeEach((to, from, next) => {
  // console.log(to.matched);
  if (to.matched.some(record => record.meta.auth)) {
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});

Vue.directive('autocomplete', {
  // to do 
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
