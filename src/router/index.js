import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/Profile',
  name: 'Profile',
  component: Home
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/Experience',
  name: 'EXPERIENCE',
  component: () =>
    import('../views/Experience.vue')
},
{
  path: '/Product',
  name: 'PRODUCT',
  component: () =>
    import('../views/Product.vue')
},
{
  path: '/Product-item1',
  name: 'PRODUCT-item1',
  component: () =>
    import('../views/Proitem1.vue')
},
{
  path: '/Product-item2',
  name: 'PRODUCT-item2',
  component: () =>
    import('../views/Proitem2.vue')
}
]

const Router = createRouter({
  history: createWebHistory(),
  routes
})

export default Router
