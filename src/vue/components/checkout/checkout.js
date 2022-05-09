import { store } from '../store';

export default {
    data() {
        return {
            title: ' Kundkorg '
        }
    },
    methods: {
        clickOutside(event) {
            const cart = document.querySelector('.cart');

            if (!cart.contains(event.target)) {
                console.log(cart.contains(event.target));
                store.state.showCart = false;
            }
        }
    },
    render() {

        const overlay = document.querySelector('.overlay_all');
        const body = document.querySelector('body');

        if (store.state.showCart) {
            body.classList.add('stop');
            overlay.classList.add('overlay');

            overlay.addEventListener('click', this.clickOutside);

        } else {
            body.classList.remove('stop');

            if (overlay) {
                overlay.removeEventListener('click', this.clickOutside);
                overlay.classList.remove('overlay');
            }
            
        }

        const showOrders = store.state.orders.map((item) => {
            return <p>{item}</p>
        });
        return (
            <div class="cart" v-show={store.state.showCart}>
            <h1>{this.title}</h1>
            <p>{store.state.totalCost} kr</p>
            <div>{showOrders}</div>
            <div class="closeCartButton" onClick={()=> store.state.showCart = false}>
            </div>
            </div>
        )
    }
};