import { store } from '../store';

export default {
    data() {
        return {
            nameRes:'Resturang D.V.J.A ',
            buttonName: ' Kundkorg ',
        }
    },
    render() {

        return (
            <header class="navbar">
                <div class="resname">
                <i class="fa-solid fa-utensils"></i>
                 {this.nameRes}
                 <i class="fa-solid fa-utensils"></i>
                </div>
                <div class="headerMeny">
                <a class="showCartButton" onClick={()=>store.state.showCart = true}> 
                <i class="fa-solid fa-cart-arrow-down"></i> 
                </a>
                    {store.state.totalCost} kr
                </div>
            </header>
        )
    }
};