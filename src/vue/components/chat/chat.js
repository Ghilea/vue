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
        },
        sendMessage() {
            const mess = document.querySelector('.input');
            const chatOutput = document.querySelector('.chatOutp');
            const jsonMess = JSON.stringify(mess.value);

            console.log(mess.value);

            store.state.websocket.send(jsonMess);
            chatOutput.innerHTML += mess.value + '<br/>'
            
        },

        checkWebsocket() {
            const ws = new WebSocket("ws://localhost:1234/websocket");
            store.state.websocket = ws;
            ws.addEventListener("open", () => {
                console.log("We are connected");
                });
        },

    },
    mounted() {
        this.checkWebsocket()
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
                <input class="input" placeholder='Chatta med oss' />
                <div class="chatOutp"></div>
                <button class="btn" onClick={() => this.sendMessage()}>knapp</button>
                <h1>
                    {this.bokningar}
                </h1>
            </div>
        )
    }
};