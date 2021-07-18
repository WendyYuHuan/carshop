import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component: ()=>import('../views/Home.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: ()=>import('../views/User.vue')
    },
    {
      path: '/address',
      name: 'Address',
      component: ()=>import('../views/user/Address.vue')
    },
    {
      path: '/orders',
      name: 'Orders',
      component: ()=>import('../views/user/Orders.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: ()=>import('../views/user/Edit.vue')
    },
    {
      path: '/addAddress',
      name: 'AddAddress',
      component: ()=>import('../views/user/AddAddress.vue')

    },
    {
      path: '/editAddress',
      name: 'EditAddress',
      component: ()=>import('../views/user/EditAddress.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('../views/user/Login.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: ()=>import('../components/Product.vue')
    },
    {
      path: '/details',
      name: 'Details',
      component: ()=>import('../components/Details.vue')
    }
  ]
})
