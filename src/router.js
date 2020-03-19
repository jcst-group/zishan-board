import Vue from 'vue';
import Router from 'vue-router';
// import home from '@/zishan/Home.vue'
import zslogin from '@/zishan/zslogin.vue'
import zshome from '@/zishan/zshome.vue'
import base1 from '@/zishan/base1.vue'
import test from '@/zishan/test.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      // {
      //   path: '/',
      //   name:'home',
      //   component: home
      // },
      {
        path: '/',
        name:'zslogin',
        component: zslogin,
        hidden: true,
      },
      {
        path: '/zshome',
        name: 'zshome',
        component: zshome,
        hidden: true
      },
      {
        path: '/base',
        name:'base',
        component: base1,
        hidden: true,
      },
      {
        path: '/test',
        name: 'test',
        component: test,
        hidden: true
      }
  ],
});
