import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CategoryPC from '../views/CategoryPC.vue'
import Reviews from '../views/Reviews.vue'
import PcViews from '../views/PcViews.vue'
import Laptop from '../views/Laptop.vue'
import Gadgets from '../views/Gadgets.vue'
import Monitors from '../views/Monitors.vue'
import GamingChairs from '../views/GamingChairs.vue'
import About1 from '../views/About1.vue'
import About2 from '../views/About2.vue'
import AdminPanel from '../views/adminPanel.vue'
import dashboard from '../admin/dashboard.vue'
import user from '../admin/user.vue'
import product from '../admin/product.vue'
import order from '../admin/order.vue'
import payments from '../admin/payments.vue'
import messages from '../admin/messages.vue'
import settings from '../admin/settings.vue'
import help from '../admin/help.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/categoryPC',
    name: 'category',
    component: CategoryPC
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/pcViews',
    name: 'pcViews',
    component: PcViews
  },
  {
    path: '/laptop',
    name: 'laptop',
    component: Laptop
  },
  {
    path: '/gadgets',
    name: 'gadgets',
    component: Gadgets
  },
  {
    path: '/monitors',
    name: 'monitors',
    component: Monitors
  },
  {
    path: '/gamingChairs',
    name: 'gamingChairs',
    component: GamingChairs
  },
  {
    path: `/about1`,
    name: `about1`,
    component: About1
  },
  {
    path: `/about2`,
    name: `about2`,
    component: About2
  },
  {
    path: `/adminPanel`,
    name: 'adminPanel',
    component: AdminPanel
  },
  {
    path: `/dashboard`,
    component: dashboard
  },
  {
    path: `/user`,
    component: user
  },
  {
    path: `/product`,
    component: product
  },
  {
    path: `/order`,
    component: order
  },
  {
    path: `/payments`,
    component: payments
  },
  {
    path: `/messages`,
    component: messages
  },
  {
    path: `/settings`,
    component: settings
  },
  {
    path: `/help`,
    component: help
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
