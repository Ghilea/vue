import Dish_header from './dishes/dish_header';
import Dish_main from './dishes/dish_main';
import Header from './header/header';
import Footer from './footer/footer';
import { store } from './store';

export default (
    <>
        <Header />
        <main class={(store.state.menu_selected === 'barn') ? 'childrenMenu' : ''}>
            <Dish_header />
            <Dish_main />
        </main>
        <Footer />
    </>
);