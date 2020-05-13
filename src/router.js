import Vue from 'vue'
import Router from 'vue-router'
import Bio from './views/Bio.vue'
import Projects from './views/Projects.vue'
import Publi from './views/Publi.vue'
import CV from './views/CV.vue'
import Misc from './views/Misc.vue'
import NotFoundComponent from './views/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'bio'
    },
    {
      path: '/bio',
      name: 'bio',
      component: Bio
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/publi',
      name: 'publi',
      component: Publi
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV
    },
    {
      path: '/misc',
      name: 'misc',
      component: Misc
    },
    { path: '*', component: NotFoundComponent }
  ]
})
