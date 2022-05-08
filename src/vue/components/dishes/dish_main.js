import { store } from '../store';

export default {
    methods: {
        selectMenu(){
            let dishMenu;

            switch (store.state.menu_selected) {
                case 'barn':
                    dishMenu = store.state.childrenMenu;
                    break;
                case 'vuxen':
                    dishMenu = store.state.adultMenu;
                    break;
                case 'couple':
                    dishMenu = store.state.coupleMenu;
                    break;
            }

            return dishMenu;
        },
        addDish(id, dishId) {
            console.log(id, dishId);
            this.selectMenu().map((item, index) => {
                if (index === id) {
                    item.dish.map((dish, dishIndex)=> {
                        if(dishIndex === dishId){
                            console.log(dish);
                            dish.aside += 1;
                        }
                    })
                }

            })
        }
    },
    render() {
        const showDishMenu = store.state.menu.map((item, index) => {
            return (
                <section v-show={item.hide === false} class="menu_left">
                    <h2>{item.title}</h2>
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
        <>
            <div class="container">{showDishMenu}</div>
        </>
        )
    }
    
};