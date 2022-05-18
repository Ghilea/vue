import { createWebHistory, createRouter } from "vue-router";
import Dish from './dishes/dish';
import Home from './home/home';
import Spa from './spa/spa';

const startPath = '/vue/public';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: startPath + '/',
            component: Home
        },
        {
            path: startPath + '/restaurant',
            component: Dish
        },
        {
            path: startPath + '/spa',
            component: Spa
        },
        {
            path: startPath + '/events',
            component: Spa
        }, 
        {
            path: startPath + '/booking',
            component: Spa
        }
    ]
})

export default router;