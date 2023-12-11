import { createRouter, createWebHistory } from 'vue-router';

import WeatherPage from '@/components/WeatherPage.vue';
import TravelPage from '@/components/TravelPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/weather'
  },
  {
    path: '/weather',
    component: WeatherPage
  },
  {
    path: '/travel',
    component: TravelPage
  },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });


export default router;