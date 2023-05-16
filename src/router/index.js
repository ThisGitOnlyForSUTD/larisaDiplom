import {createRouter, createWebHistory} from "vue-router"
import Body from '../components/body';
import Default from '../pages/dashboard/defaultPage.vue';
import login from '@/components/auth/login.vue';
import newConfig from '@/pages/newConfg/index'
import addDevice from '@/pages/addDevice/index'
import Config from '@/pages/configPage.vue'

const routes =[
    {
      path: '/',
      component: Body,
  
      children: [
        {
          path: '/config',
          name: 'config',
          component: Config
        },
        {
          path: '',
          name: 'defaultRoot',
          component: Default,
        },
        {
          path: '/newConfig',
          name: 'newConfig',
          component: newConfig,
        },
        {
          path: '/addDevice',
          name: 'addDevice',
          component: addDevice,
        }
      ]
    },
    {
      path: '/auth',
      children: [
      {
        path: 'login',
        name: 'Login',
        component: login,
        meta: {
          title: ' login | Cuba - Premium Admin Template',
        }
      },
      ]
    },
]
const router=createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {

const  path = ['/auth/login'];
 if(path.includes(to.path) || localStorage.getItem('User')){
  return next();
 }
 next('/auth/login');
})
export default router