import { store } from '../store';

export default {
    data() {
        return {
        }
    },
    render() {

        return (
            <div class="headerMeny">
                <a class="showCartButton" onClick={()=>store.state.showCart = true}> 
                    <i class="fa-solid fa-cart-arrow-down"></i> 
                </a>
                {store.state.totalCost} kr
            </div>

        )
    }
};