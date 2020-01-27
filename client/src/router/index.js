import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Groups from '../views/Groups.vue'
import Course from '../views/Course.vue'
import Profile from '../views/Profile.vue'
import Friends from '../views/Friends.vue'
import Album from '../views/Album.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/groups',
    name: 'groups',
    component: Groups
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends
  },
  {
    path: '/album',
    name: 'album',
    component: Album
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
