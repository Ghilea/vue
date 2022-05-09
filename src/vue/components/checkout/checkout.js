import { store } from '../store';

export default {
    data() {
        return {
            title: ' Kundkorg '
        }
    },

    render() {
        const showOrders = store.state.orders.map((item) => {
            return <p>{item}</p>
        });
        return (
            <div class="cart" v-show={store.state.showCart}>
            <h1>{this.title}</h1>
            <p>{store.state.menu}</p>
            <p>{store.state.totalCost} kr</p>
            <p>{showOrders}</p>
            <button class="closeCartButton" onClick={()=>store.state.showCart = false}>
            Stäng varukorg
            </button>
            </div>
        )
    }
};