import dish_main from '../dishes/dish_main';
import { store } from '../store';

export default {
    data() {
        return {
            title: ' Chat ',
            bokningar: 'Mina bokningar'
        }
    },
    methods: {
        clickOutside(event) {
            const chat = document.querySelector('.chat');

            if (!chat.contains(event.target)) {
                store.state.showChat = false;
            }
        }
    },
    render() {

        const overlay = document.querySelector('.overlay_all');
        const body = document.querySelector('body');

        if (store.state.showChat) {
            body.classList.add('stop');
            overlay.classList.add('overlay');

            overlay.addEventListener('click', this.clickOutside);

        } else {
            body.classList.remove('stop');

            if (overlay) {
                overlay.removeEventListener('click', this.clickOutside);
                overlay.classList.remove('overlay');
            }
        }      

        return (
            <div class="chat" v-show={store.state.showChat}>
                <h1>{this.title}</h1>
                <div class="closeChatBtn" onClick={() => store.state.showChat = false}>
                </div>
                <h1>
                    {this.bokningar}
                </h1>
            </div>
        )
    }
};