import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage/MainPage.vue';
import Auth from "@/components/Auth/Auth.vue";
import store from '@/store';
import StepList from "@/components/Step-list/StepList.vue";


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
                path: '/step-list',
                name: 'Step-list',
                component: StepList,
                meta: {
                    title: (route: any) => route.name
                }
            },
        ]
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
            console.log(to.fullPath)
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
