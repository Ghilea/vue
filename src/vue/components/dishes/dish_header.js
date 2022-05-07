import { withModifiers } from "vue";
import { adultMenu, childrenMenu, coupleMenu } from "../data";

const cheapPrices = (data) => {
    let newArray = [];

    data.map((item) => {
        let newItem = item.dish.filter((dishes) => {
            return dishes.price < 150
        })

        if (newItem.length > 0) {
            newArray.push({
                title: item.title,
                dish: newItem
            });
        }

    })

    return newArray;
}

export const Dish_header = {
    
    data(){
        return {
            title: 'Meny',
                navbar: {
                    menu: [{
                            title: 'barn'
                        },
                        {
                            title: 'vuxen'
                        },
                        {
                            title: 'par'
                        }
                    ],
                    option: [{
                            title: 'billigt'
                        },
                        {
                            title: 'allt'
                        }
                    ]
                },
                menu_selected: null,
                menu_selected_price: null,
                menu: []
        }
    },
    methods: {
        changeGuest(menu) {
            this.menu_selected = menu;

            switch (this.menu_selected) {
                case 'barn':
                    this.menu = childrenMenu;
                    break;
                case 'vuxen':
                    this.menu = adultMenu;
                    break;
                case 'par':
                    this.menu = coupleMenu;
                    break;
                default:
                    this.menu = '';
                    break;
            }
        },
        changePrice(price) {
            this.menu_selected_price = price;

            switch (this.menu_selected) {
                case 'barn':
                    (price === 'billigt') ?
                    this.menu = cheapPrices(childrenMenu):
                        this.menu = childrenMenu
                    break;
                case 'vuxen':
                    (price === 'billigt') ?
                    this.menu = cheapPrices(adultMenu):
                        this.menu = adultMenu
                    break;
                case 'par':
                    (price === 'billigt') ?
                    this.menu = cheapPrices(coupleMenu):
                        this.menu = coupleMenu
                    break;
            }

        },
        addDish(id, disgId) {
            console.log(id, disgId);
        }
    },
    beforeMount() {
        this.changeGuest('vuxen');
        this.changePrice('allt')
    },
    render() {
        const chooseMenu = this.navbar.menu.map((item) => {
            return <option>{item.title}</option>
        });

        const choosePrice = this.navbar.option.map((item) => {
            return <option>{item.title}</option>
        });

        const showDishMenu = this.menu.map((item, index) => {
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
            <header>
                <h1>{this.title}</h1> 
                <p class="child" v-show={this.menu_selected === 'barn'}>{this.menu_selected}</p>
                <p class="heart" v-show={this.menu_selected === 'couple'}>{this.menu_selected}</p>
                <p v-show={this.menu_selected === 'vuxen'}>{this.menu_selected}</p>

                <div class="menu_navbar">
                    <div class="flex">
                        <label for="choose_menu">Meny</label>
                        <select id = "choose_menu"
                        v-model = {
                            this.menu_selected
                        }
                        onChange = {
                            this.changeGuest(this.menu_selected)
                        } >
                            {chooseMenu}
                        </select>
                    </div>
                    
                    <div class="flex">
                        <label for="choose_price">Prisklass</label>
                        <select id = "choose_price"
                        v-model = {
                            this.menu_selected_price
                        }
                        onChange = {
                            this.changePrice(this.menu_selected_price)
                        } >
                            {choosePrice}
                        </select>
                    </div>
                    
                </div>
            </header>

            <div class="container">{showDishMenu}</div>
        </>
        )
    }
    
};