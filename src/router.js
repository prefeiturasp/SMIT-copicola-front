import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/quem-somos',
      name: 'QuemSomos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/QuemSomos.vue')
    },
    {
      path: '/guias',
      name: 'Guias',
      component: () => import('./views/Guias.vue'),
      meta: {
        breadcrumb: [
          { name: 'Guias', link: '/guias' }
        ]
      }
    },
    {
      path: '/guias/:guia_slug',
      name: 'Guia',
      component: () => import('./views/Guia.vue'),
      meta: {
        breadcrumb: [
          { name: 'Guias', link: '/guias' },
          { name: 'Guia', link: '/guias/:guia_slug'}
        ]
      }
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: () => import('./views/Agenda.vue')
    },
    {
      path: '/novidades',
      name: 'Novidades',
      component: () => import('./views/Novidades.vue'),
      meta: {
        breadcrumb: [
          { name: 'Novidades', link: '/novidades' }
        ]
      }
    },
    {
      path: '/novidades/:novidade_slug',
      name: 'Novidade',
      component: () => import('./views/Novidade.vue'),
      meta: {
        breadcrumb: [
          { name: 'Novidades', link: '/novidades' },
          { name: 'Novidade', link: '/novidades/:novidade_slug'}
        ]
      }
    }
  ]
})
