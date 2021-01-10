import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SinglePost from '../views/PostDetails.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/post/:postId',
        name: 'PostDetails',
        component: SinglePost,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
