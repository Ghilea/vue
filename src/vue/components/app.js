import Header from './header/header';
import Footer from './footer/footer';
import CartButton from './header/cartButton';
import Chat from './chat/chat';

export default {
    render(){
        return (
            <>
                <Header />
                <CartButton />
                <main>
                    <router-view />
                    <Chat />
                </main>
                <Footer />
                <div class="overlay_all"></div>
            </>
        )
    }
    
};