import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/views/blog.vue'



import Login from '@/views/login.vue'
import Content from '@/views/content.vue'

import Admin from '@/views/houtai.vue'
import Article from '@/components/admin/article.vue'
import Manage from '@/components/admin/manage.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: Blog,
      name:'Blog'
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/content',
      name:'Content',
      component:Content
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      children: [
        {
          path: 'article',
          name: 'article',
          component: Article
        },
        {
          path: 'manage',
          name: 'manage',
          component: Manage
        },

      ]
    },

  ]
})
