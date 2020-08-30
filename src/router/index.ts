import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// 路由数据
import routes from './routes'

const router = createRouter({
  // history: createWebHashHistory(),//hash模式
  history: createWebHistory(process.env.BASE_URL),//历史模式
  routes,
  linkActiveClass: "border-pink-500 text-white", // active class for non-exact links.
  linkExactActiveClass: "border-pink-500 text-white" // active class for *exact* links.
})

export default router
