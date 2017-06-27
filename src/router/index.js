import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Notes from '@/pages/Notes'
import Note from '@/pages/Note'

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
      path: '/notes/:key',
      name: 'note',
      component: Note
    }
  ]
})
