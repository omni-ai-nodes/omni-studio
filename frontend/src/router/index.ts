import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Mcp from "@/views/Mcp/index.vue"
import Test from "@/views/test/index.vue"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Test,
      component:Home
    },
    {
      path: '/mcp',
      name: 'mcp',
      component: Mcp,
      children: [
        {
          path: '',
          redirect: { name: 'dashboard' }
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/Mcp/components/dashboard.vue')
        }
      ]
    }
  ],
})

export default router
