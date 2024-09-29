import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
// import About from '../pages/About.vue';
// import Contact from '../pages/Contact.vue';
import ArticlePage from './pages/ArticlePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact,
  // },
  {
    path: '/article/:slug',
    name: 'Article',
    component: ArticlePage, // 文章组件
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
