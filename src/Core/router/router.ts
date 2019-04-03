import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Auth from "@/Pages/Auth/Auth.vue";
import MainPage from '@/Pages/MainPage/MainPage.vue';
import Goals from '@/Pages/Goals/Goals.vue';
import Goal from "@/Pages/Goal/Goal.vue";
import Profile from "@/Pages/Profile/Profile.vue";
import NotFound from "@/Pages/NotFound/NotFound.vue";


Vue.use(Router);

const Route = new Router({
  routes: [
      {
          path: '/auth',
          name: 'Auth',
          component: Auth,
          meta: {
              auth: true,
              title: (route: any) => route.name
          }
      },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
        meta: {
            title: (route: any) => 'Goal list'
        },
        children: [
            {
                path: '',
                name: 'Goals',
                component: Goals,
                meta: {
                    title: (route: any) => route.name
                }
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Profile,
                meta: {
                    title: (route: any) => route.name
                }
            },
            {
                path: 'goal-:id',
                name: 'Goal',
                component: Goal,
                meta: {
                    title: (route: any) => route.name
                }
            },
            {
                path: '404',
                name: '404',
                component: NotFound,
            }, {
                path: '*',
                redirect: '/404'
            },
        ],
    },


  ],
    mode: 'history',
});

Route.beforeEach((to, from, next)=> {
    Vue.nextTick(() => {
        if(to.meta.title){
            document.title = to.meta.title(to)
        }
    });

    if(to.matched.some(record => !record.meta.auth)){
        if(!store.state.UserModule.currentUser){
            next({
                path: '/auth',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default Route;
