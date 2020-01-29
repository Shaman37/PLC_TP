import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Groups from '../views/Groups.vue'
import Course from '../views/Course.vue'
import Profile from '../views/Profile.vue'
import Friends from '../views/Friends.vue'
import Album from '../views/Album.vue'
import Home from '../views/Home.vue'
import store from '../store/modules/token';

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (store.state.token != null) {
    next()
    return
  }
  next('/')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/groups',
    name: 'groups',
    component: Groups,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/course',
    name: 'course',
    component: Course,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/album',
    name: 'album',
    component: Album,
    beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
