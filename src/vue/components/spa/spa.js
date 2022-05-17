/* import { spaTreatments } from '../data';
import { store } from '../store';

export default {
    methods: {
        selectMenu(){
            let spaTreatment = '';

            switch (store.state.menu_selected) {
                case 'Behandling':
                    spaTreatment = store.state.spaTreatment;
                    break;
            }

            return spaTreatment;
        },
        /* addDish(id, dishId) {
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
        
        const showTreatmentMenu = store.state.menu.map((item, index) => {
            return (
                <section v-show = {
                    item.hide === false
                }
                class = "menu_left">
                    <h2 class={(store.state.menu_selected === 'barn') ? 'childtitle' : (store.state.menu_selected === 'par') ? 'partitle' : ''}>{item.title}</h2>
                    {
                        item.treatment.map((treatment, dishIndex) => {
                            return (
                                <article v-show={treatment.hide === false} onClick={() => this.addDish(index, treatmentIndex)}>
                                    
                                    <div class = "flex_title">
                                        <div class="dotted_top"></div>
                                        <div>
                                            <h3>{treatment.name}</h3>
                                            <p>{treatment.describe}</p>
                                        </div>
                                        
                                        <div>
                                            <p class="menu_price">{treatment.price}:-</p>
                                            <aside v-show={treatment.aside > 0}>{treatment.aside} st</aside>
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
    
}; */