import { store } from '../store';

export default {
    data() {
        return {
            title: ' Kundkorg '
        }
    },
    render() {
        return (
            <div>
            <button class="showCartButton" onClick={()=>store.state.showCart = true}> {this.title} </button>
            <div class="cart" v-show={store.state.showCart}>
            <h1>{this.title}</h1>
            <p>{store.state.totalCost} kr</p>
            <button class="closeCartButton" onClick={()=>store.state.showCart = false}>
            Stäng varukorg
            </button>
            </div>
            </div>
        )
    }
};