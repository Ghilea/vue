import Header from '@comp/header/header';
import Footer from '@comp/footer/footer';
import CartButton from '@comp/header/cartButton';
import Chat from '@comp/chat/chat';

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