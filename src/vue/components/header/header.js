import { store } from '../store';

export default {
    data() {
        return {
            title: 'Totalsumma:'
        }
    },
    methods: {
        showTotalCost(){
            let totalCost = 0;
            store.state.menu.map((item) => {
                let newItem = item.dish.filter((dishes) => {
                    if (dishes.aside > 0) {
                        totalCost += dishes.price
                    }
                    return dishes
                })

                console.log(newItem)
            })
        }
    },
    render() {
        this.showTotalCost();
        return (
        
            <header class="navbar">
                <div>{this.title} </div>
            </header>
        
        )
    }
    
};