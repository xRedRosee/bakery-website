import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use( VueRouter )

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Vue.component( 'Home', require( './pages/Home.vue' ) )
        },
        {
            path: '/about',
            name: 'about',
            component: Vue.component( 'About', require( './pages/Home.vue' ) )
        },
        {
            path: '/products',
            name: 'products',
            component: Vue.component( 'Products', require( './pages/Home.vue' ) )
        },
        {
            path: '/contact',
            name: 'contact',
            component: Vue.component( 'Contact', require( './pages/Home.vue' ) )
        }
    ]
});