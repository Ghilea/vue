import { createWebHistory, createRouter } from "vue-router";
import Dish from '@comp/dishes/dish';
import Home from '@comp/home/home';
import Spa from '@comp/spa/spa';
import Events from '@comp/event/event';
import Booking from '@comp/booking/booking';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/restaurant',
            name: 'dish',
            component: Dish
        },
        {
            path: '/spa',
            name: 'spa',
            component: Spa
        },
        {
            path: '/events',
            name: 'events',
            component: Events
        }, 
        {
            path: '/booking',
            name: 'booking',
            component: Booking
        }
    ]
})

export default router;