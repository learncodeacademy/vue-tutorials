import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Account from '@/components/Account'
import Contact from '@/components/Contact'
import Friends from '@/components/Friends'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/friends/:id/:age/:weight',
      name: 'Friends',
      props: true,
      component: Friends
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
