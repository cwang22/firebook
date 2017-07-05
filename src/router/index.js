import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Notes from '@/pages/Notes'
import EditNote from '@/pages/EditNote'
import CreateNote from '@/pages/CreateNote'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/notes',
  name: 'notes',
  component: Notes,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/notes/create',
  name: 'create',
  component: CreateNote,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/notes/:key',
  name: 'edit',
  component: EditNote,
  meta: {
    requiresAuth: true
  }
}]

const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!window.app.$store.state.user.authenticated) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
