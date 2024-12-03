import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import ArticlePage from './pages/ArticlePage.vue';
import LinksPage from './pages/Links.vue';
import ProductPage from './pages/Products.vue'; 

const routes = [
  { path: '/', component: HomePage },
  { path: '/article/:slug', component: ArticlePage },
  { path: '/links', component: LinksPage },
  { path: '/products', component: ProductPage }, 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
