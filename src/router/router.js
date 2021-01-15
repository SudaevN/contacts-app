import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/contact/:index',
    name: 'Contact',
    component: () => import('../views/ContactCard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
