import { store } from '../store';

export default {
    data() {
        return {
            nameRes:'Resturang D.V.J.A ',
            title: 'Totalsumma: ',
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
                <div>
                <button class="showCartButton" onClick={()=>store.state.showCart = true}> {this.buttonName} </button>
                    {this.title}
                    {store.state.totalCost} kr
                </div>
            </header>
        )
    }
};