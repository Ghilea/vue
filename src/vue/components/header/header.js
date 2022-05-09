import { store } from '../store';

export default {
    data() {
        return {
            nameRes:'Resturang D.V.J.A ',
            title: 'Totalsumma: ',
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
                    {this.title}
                    {store.state.totalCost} kr
                </div>
            </header>
        )
    }
};