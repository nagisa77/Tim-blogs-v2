import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
// import About from '../pages/About.vue';
import ArticlePage from './pages/ArticlePage.vue';
import LinksPage from './pages/Links.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/article/:slug', component: ArticlePage },
  { path: '/links', component: LinksPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
