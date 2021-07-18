// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import axios from 'axios'
import { Tabbar, TabbarItem, NavBar, Cell, CellGroup, Grid, GridItem, DropdownMenu, DropdownItem,
  Image as VanImage, Button, Field, Cascader, Tab, Tabs, Card, Toast, Sku } from 'vant'

axios.defaults.baseURL = ''
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(VanImage)
Vue.use(Button)
Vue.use(Field)
Vue.use(Cascader)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Card)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Toast)
Vue.use(Sku)

Vue.config.productionTip = false

Vue.filter('filterPrice',function(val){
  return '￥' + val.toFixed(1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
