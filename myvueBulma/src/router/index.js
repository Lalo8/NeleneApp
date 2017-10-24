import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/router/HomePage'
import LoginPage from '@/router/LoginPage'
import SignupPage from '@/router/SignupPage'
import OrganisationPage from '@/router/OrganisationPage'
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
Vue.use(Buefy);


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage,

    },
    {
      path: '/signup',
      component: SignupPage
    }, 
    {
      path: '/organisations',
      component: OrganisationPage
    }


  ]
})
