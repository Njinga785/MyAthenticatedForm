
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import SignInForm from './components/SignInForm.vue'
// import SignUpForm from './components/SignInForm.vue'
import Dashboard from './views/Dashboard.vue'
import store from './components/store'
Vue.use(VueRouter)


const routes = [
    { path: '/', name: "home", component: HelloWorld, },
    // { path: '/sign-in', component: SignInForm },
    // { path: './sign-up', component: SignUpForm },
    {
        path: '/dashboard', component: Dashboard, meta: { requiresAuth: true }
        // beforeEnter(to, from, next) {
        //     console.log(store.getters.token);
        //     if (store.getters.token) {
        //         next()
        //     } else {
        //         next('/')
        //     }

        // //     // store.getters.token ? next() : next({ name: 'home' })
        // //     // if (store.getters.token) {
        // //     //   next()
        // //     // } else {
        // //     //   next({
        // //     //     name: 'helloword' 
        // //     //   });
        // //     // }
        // }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log("wesh");
        if (store.getters.token != null) {
            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
})
export default router
