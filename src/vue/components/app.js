import Dish_header from './dishes/dish_header';
import Dish_main from './dishes/dish_main';
import Header from './header/header';
import Footer from './footer/footer';
import Checkout from './checkout/checkout';

export default (
    <>
        <Header />
        <main>
            <Checkout />
            <Dish_header />
            <Dish_main />
        </main>
        <Footer />
        <div class="overlay_all"></div>
    </>
);