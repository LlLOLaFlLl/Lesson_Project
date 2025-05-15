import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/home.vue'
import ConcertDetails from '@/components/pages/concertDetails.vue'
import ContactsPage from '@/components/pages/ContactsPage.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/concert/:id',          // 👈 новый маршрут
    name: 'concert-details',
    component: ConcertDetails
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsPage
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
