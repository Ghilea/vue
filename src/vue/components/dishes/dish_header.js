import { store } from '../store';

export default {
    
    data(){
        return {
            title: 'Meny',
            navbar: {
                menu: [{title: 'barn'}, {title: 'vuxen'}, {title: 'par'}],
                option: [{title: 'billigt'}, {title: 'allt'}]
            }
        }
    },
    methods: {
        changeGuest(menu) {
            store.state.menu_selected = menu;
        },
        changePrice(price) {
            store.state.menu_selected_price = price;

            switch (store.state.menu_selected) {
                case 'barn':
                    (price === 'billigt') ?
                    store.state.menu = this.cheapPrices(store.state.childrenMenu):
                        store.state.menu = this.all(store.state.childrenMenu)
                    break;
                case 'vuxen':
                    (price === 'billigt') ?
                    store.state.menu = this.cheapPrices(store.state.adultMenu):
                        store.state.menu = this.all(store.state.adultMenu)
                    break;
                case 'par':
                    (price === 'billigt') ?
                    store.state.menu = this.cheapPrices(store.state.coupleMenu):
                        store.state.menu = this.all(store.state.coupleMenu);
                    break;
            }

        },
        all(data) {
            let newArray = [];

            data.map((item) => {
                let newItem = item.dish.filter((dishes) => {
                    if (dishes.price > 150) {
                        dishes.hide = false
                    }
                    return dishes
                })

                if (newItem.length > 0) {
                    newArray.push({
                        title: item.title,
                        hide: false,
                        dish: newItem
                    });
                }

            })

            return newArray;
        },
        cheapPrices(data) {
            let newArray = [];

            data.map((item) => {
                let newItem = item.dish.filter((dishes) => {
                    if(dishes.price > 150){
                        dishes.hide = true
                    }
                    
                    return dishes
                })
                
                if (newItem.length > 0) {
                    newArray.push({
                        title: item.title,
                        hide: false,
                        dish: newItem
                    });
                }else{
                    newArray.push({
                        title: item.title,
                        hide: true,
                        dish: newItem
                    })
                }

            })

            return newArray;
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

        return (
        <>
            <header>
                <h1>{this.title}</h1> 
                <p class={(store.state.menu_selected === 'barn') ? 'child' : (store.state.menu_selected === 'couple') ? 'couple' : ''}>{store.state.menu_selected}</p>
                
                <div class="menu_navbar">
                    <div class="flex">
                        <label for="choose_menu">Meny</label>
                        <select id = "choose_menu"
                        v-model = {
                            store.state.menu_selected
                        }
                        onChange = {
                            this.changeGuest(store.state.menu_selected)
                        } >
                            {chooseMenu}
                        </select>
                    </div>
                    
                    <div class="flex">
                        <label for="choose_price">Prisklass</label>
                        <select id = "choose_price"
                        v-model = {
                            store.state.menu_selected_price
                        }
                        onChange = {
                            this.changePrice(store.state.menu_selected_price)
                        } >
                            {choosePrice}
                        </select>
                    </div>
                    
                </div>
            </header>
        </>
        )
    }
    
};