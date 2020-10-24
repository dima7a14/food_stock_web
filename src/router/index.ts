import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

export const paths = {
  root: {
    path: '/',
    name: 'Home',
  },
  about: {
    path: '/about',
    name: 'About',
  },
  signIn: {
    path: '/sign-in',
    name: 'Sign in',
  },
  signUp: {
    path: '/sign-up',
    name: 'Sign up',
  },
  products: {
    path: '/products',
    name: 'Products',
  },
  operations: {
    path: '/operations',
    name: 'Operations',
  },
  requests: {
    path: '/requests',
    name: 'Requests',
  },
};

const routes: Array<RouteRecordRaw> = [
  {
    ...paths.root,
    component: Home,
  },
  {
    ...paths.about,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    ...paths.signIn,
    component: () => import(/* webpackChunkName: "sign_in" */ '../views/SignIn.vue'),
  },
  {
    ...paths.signUp,
    component: () => import(/* webpackChunkName: "sign_up" */ '../views/SignUp.vue'),
  },
  {
    ...paths.products,
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
  },
  {
    ...paths.operations,
    component: () => import(/* webpackChunkName: "operations" */ '../views/Operations.vue'),
  },
  {
    ...paths.requests,
    component: () => import(/* webpackChunkName: "requests" */ '../views/Requests.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
