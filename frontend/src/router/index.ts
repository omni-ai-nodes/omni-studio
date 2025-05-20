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
      component: Home
    },
    {
      path: '/mcp',
      name: 'mcp',
      component: Home,  // 使用Home组件作为布局
      children: [
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
