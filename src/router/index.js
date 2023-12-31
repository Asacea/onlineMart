import { createRouter,createWebHistory } from "vue-router";
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:()=>import('../views/Layout/index.vue'),
      children:[
        {
          path:'',
          name:'首页',
          component:()=>import('../views/Home/index.vue')
        },
        {
          path:'',
          name:'category',
          component:()=>import('../views/Category/index.vue')
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login/index.vue')
    }
  ]
})
export default router
