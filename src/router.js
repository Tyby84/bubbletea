import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Teak from './views/Teak.vue';
import Contact from './views/Contact.vue';
import Gyumaroma from './views/Gyum_aroma.vue';
import Tejaroma from './views/Tej_aroma.vue';
import Zselek from './views/Zselek.vue';
import Menu from './views/Menu.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/teak',
      name: 'teak',
      component: Teak
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gyumolcsaroma',
      name: 'gyumaroma',
      component: Gyumaroma
    },
    {
      path: '/tejesaroma',
      component: Tejaroma
    },
    {
      path: '/zselek',
      component: Zselek
    },
    {
      path: '/menu',
      component: Menu
    }
  ]
});
