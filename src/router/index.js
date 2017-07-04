import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Notes from '@/pages/Notes'
import EditNote from '@/pages/EditNote'
import CreateNote from '@/pages/CreateNote'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/notes/create',
      name: 'create',
      component: CreateNote
    },
    {
      path: '/notes/:key',
      name: 'edit',
      component: EditNote
    }
  ]
})
