import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EventsList from './views/EventsList.vue'
import Doors from './views/Doors.vue'
import AddDoors from './views/doors/Add.vue'
import EditDoors from './views/doors/Edit.vue'
import Config from './views/Config.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/events',
      name: 'eventsList',
      component: EventsList
    },
    {
      path: '/doors',
      name: 'doors',
      component: Doors
    },
    {
      path: '/doors/add',
      name: 'doorsAdd',
      component: AddDoors
    },
    {
      path: '/doors/edit/:uuid',
      name: 'doorsEdit',
      component: EditDoors
    },
    {
      path: '/config',
      name: 'cofnig',
      component: Config
    },
  ]
})
