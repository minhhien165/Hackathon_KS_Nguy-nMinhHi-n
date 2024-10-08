import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ManagerProduct from '../views/ManagerProduct.vue';
import ManagerCategory from '../views/ManagerCategory.vue';

const routes = [
  { path: '/admin', component: Dashboard },
  { path: '/admin/manager-product', component: ManagerProduct },
  { path: '/admin/manager-category', component: ManagerCategory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
