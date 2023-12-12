import { createRouter, createWebHistory } from 'vue-router'
// import components
import HomeLayout from '@/layouts/HomeLayout.vue'
//import LoginLayout from '@/layouts/LoginLayout.vue'
//import ProfileLayout from '@/layouts/ProfileLayout.vue'

const routes = [
    { path: '/', component: HomeLayout },
    //{ path: '/login', component: LoginLayout },
    //{ path: '/profile', component: ProfileLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
