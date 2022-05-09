import { store } from '../store';

export default {
    data() {
        return {
            title: 'Totalsumma: '
        }
    },
    methods: {
        showTotalCost(){
            let totalCost = 0;
            store.state.menu.map((item) => {
                item.dish.filter((dishes) => {
                    if (dishes.aside > 0) {
                        console.log(dishes.price);
                        totalCost += dishes.price
                    }
                })
            })
            return totalCost;
        }
    },
    render() {
        
        const total = this.showTotalCost();
        return (
        
            <header class="navbar">
                <div>
                    {this.title}
                    {total} kr
                </div>
            </header>
        
        
        )
    }
    
};