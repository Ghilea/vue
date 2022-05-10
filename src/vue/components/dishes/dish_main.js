import { coupleMenu } from '../data';
import { store } from '../store';

export default {
    methods: {
        selectMenu(){
            let dishMenu = '';

            switch (store.state.menu_selected) {
                case 'barn':
                    dishMenu = store.state.childrenMenu;
                    break;
                case 'vuxen':
                    dishMenu = store.state.adultMenu;
                    break;
                case 'par':
                    dishMenu = store.state.coupleMenu;
                    break;
            }

            return dishMenu;
        },
        addDish(id, dishId) {
            this.selectMenu().map((item, index) => {
                if (index === id) {
                    item.dish.map((dish, dishIndex)=> {
                        if(dishIndex === dishId){
                            dish.aside += 1;
                            store.state.totalCost += dish.price;
                            store.state.orders.push({name: dish.name});
                        }
                    })
                }
            })
        }
    },
    render() {
        
        const showDishMenu = store.state.menu.map((item, index) => {
            return (
                <section v-show = {
                    item.hide === false
                }
                class = "menu_left">
                    <h2 class={(store.state.menu_selected === 'barn') ? 'childtitle' : (store.state.menu_selected === 'par') ? 'partitle' : ''}>{item.title}</h2>
                    {
                        item.dish.map((dish, dishIndex) => {
                            return (
                                <article v-show={dish.hide === false} onClick={() => this.addDish(index, dishIndex)}>
                                    
                                    <div class = "flex_title">
                                        <div class="dotted_top"></div>
                                        <div>
                                            <h3>{dish.name}</h3>
                                            <p>{dish.describe}</p>
                                        </div>
                                        
                                        <div>
                                            <p class="menu_price">{dish.price}:-</p>
                                            <aside v-show={dish.aside > 0}>{dish.aside} st</aside>
                                        </div>
                                    </div>
                
                                </article>
                            )
                        })
                    }
                </section>
            )
        })

        return (
           <div class={`container ${(store.state.menu_selected === 'barn') ? 'childrenMenu' : (store.state.menu_selected === 'par') ? 'coupleMenu' : ''}`}>{showDishMenu}</div>
        )
    }
    
};