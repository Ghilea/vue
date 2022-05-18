import {
    createStore
} from 'vuex';
import {
    adultMenu,
    childrenMenu,
    coupleMenu,
} from './data';

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            adultMenu,
            childrenMenu,
            coupleMenu,
            menu_selected: 'vuxen',
            menu_selected_price: 'allt',
            totalCost: 0,
            menu: [],
            showCart: false,
            showChat: false,
            orders: [],
            websocket: "",
            adminChat: false,
            resturantModal: false,
            spaModal: false,
            roomModal: false,
            restaurantBooking: "",
            roomBooking: "",
            spaBooking: ""
        }
    }
})