import { store } from '../store';

export default {
    data() {
        return {
            value: 'kr'
        }
    },
    render() {

        return (
            <div>
                <div class="chatmenu" onClick = {
                () => store.state.showChat = true
            } >
                    <a class="chatbtn">
                        <i class="fa-solid fa-bell-concierge"></i>
                    </a>
                </div>
            <div class = "headerMeny"
            onClick = {
                () => store.state.showCart = true
            } >
                <a class="showCartButton" > 
                    <i class="fa-solid fa-cart-arrow-down"></i> 
                </a>
                {store.state.totalCost} {this.value}
            </div>
            </div>

        )
    }
};