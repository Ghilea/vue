import { store } from '../../store';

export default {
    data() {
        return {
            title: ' Kundkorg ',
            noOrder: 'Finns inget ännu'
        }
    },
    methods: {
        clickOutside(event) {
            const cart = document.querySelector('.cart');

            if (!cart.contains(event.target)) {
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
        
        let showOrders = [];
        let countOrder = [];

        if (store.state.orders.length > 0) {
            countOrder = [...store.state.orders.reduce((prev, current) => {
                if (!prev.has(current.name)) { 
                    prev.set(current.name, { ...current, count: 0 });
                }
                prev.get(current.name).count++;
                return prev;
            }, new Map).values()];
        }else {
            showOrders.push(<p>{this.noOrder}</p>);
        }

        showOrders = countOrder.map((item) => {
            return <p>{item.count}x - {item.name}</p>
        });

        return (
            <>
            <div class="cart" v-show={store.state.showCart}>
                <h1>{this.title}</h1>
                <p>{store.state.totalCost} kr</p>
                <div>{showOrders}</div>
                <div class="closeCartButton" onClick={() => store.state.showCart = false}>
                </div>
            </div>
            <div class = "headerMeny"
            onClick = {
                () => store.state.showCart = true
            } >
                <a class="showCartButton" > 
                    <i class="fa-solid fa-cart-arrow-down"></i> 
                </a>
                {store.state.totalCost} kr
            </div>
            </>
        )
    }
};