import { store } from "../store";

export default {
    data() {
        return {
           
        }
    },
    
    methods: {

    },


    render() {
 
        return (
            <div class="booking">
               <button class="bookButton" onClick={() => store.state.restaurantModal = true}>Boka Resturang</button>
               <div class="restaurantModal" v-show={store.state.restaurantModal}>
                   <button onClick={() => store.state.restaurantModal = false}>Close</button>
                   Resturang
               </div>
               <button class="bookButton" onClick={() => store.state.roomModal = true}>Boka Rum</button>
               <div class="roomModal" v-show={store.state.roomModal}>
               <button onClick={() => store.state.roomModal = false}>Close</button>
                   Rum
               </div>
               <button class="bookButton" onClick={() => store.state.spaModal = true}>Boka Spa</button>
               <div class="spaModal" v-show={store.state.spaModal}>
               <button onClick={() => store.state.spaModal = false}>Close</button>
                    Spa
                </div> 
            </div>
        )
       
    }
};