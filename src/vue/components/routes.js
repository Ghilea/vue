import { createWebHistory, createRouter } from "vue-router";
import Dish from './dishes/dish';
import Home from './home/home';
import Spa from './spa/spa';
import Events from './event/event';
import Booking from './booking/booking';

const startPath = '/vue/public';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: startPath + '/',
            name: 'home',
            component: Home
        },
        {
            path: startPath + '/restaurant',
            name: 'dish',
            component: Dish
        },
        {
            path: startPath + '/spa',
            name: 'spa',
            component: Spa
        },
        {
            path: startPath + '/events',
            name: 'events',
            component: Events
        }, 
        {
            path: startPath + '/booking',
            name: 'booking',
            component: Booking
        }
    ]
})

export default router;