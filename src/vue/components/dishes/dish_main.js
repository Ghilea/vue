import { store } from '../store';

export default {
    methods: {
        addDish(id, disgId) {
            console.log(id, disgId);
        }
    },
    render() {
        const showDishMenu = store.state.menu.map((item, index) => {
            return (
                <section class="menu_left">
                    <h2>{item.title}</h2>
                    {
                        item.dish.map((dish, dishIndex) => {
                            return (
                                <article onClick={() => this.addDish(index, dishIndex)}>
                                    
                                    <div class = "flex_title">
                                        <div class="dotted_top"></div>
                                        <div>
                                            <h3>{dish.name}</h3>
                                            <p>{dish.describe}</p>
                                        </div>
                                        
                                        <div>
                                            <p class="menu_price">{dish.price}:-</p>
                                            <aside v-show={dish.aside > 0}>1 st</aside>
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