import dish_main from '../dishes/dish_main';
import { store } from '../store';
import showbokings from './showbokings';

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
            const adminChatOutput = document.querySelector('.adminChatOutput');

            console.log(mess.value);

            store.state.websocket.send(jsonMess);
            chatOutput.innerHTML += 'Du - ' + mess.value + '<br/>';
            adminChatOutput.innerHTML += 'Kund - ' + mess.value + '<br/>';

        },

        checkWebsocket() {
            const ws = new WebSocket("ws://localhost:1234/websocket");
            store.state.websocket = ws;
            ws.addEventListener("open", () => {
                //console.log("We are connected");
            });
        },
        sendAdminMessage() {
            const adminMess = document.querySelector('.admin-input');
            const adminChatOutput = document.querySelector('.adminChatOutput');
            const adminJsonMess = JSON.stringify(adminMess.value);
            const chatOutput = document.querySelector('.chatOutp');

            store.state.websocket.send(adminJsonMess);
            adminChatOutput.innerHTML += 'Du - ' + adminMess.value + '<br/>';
            chatOutput.innerHTML += 'Admin - ' + adminMess.value + '<br/>';

        }
    },
    mounted() {
        this.checkWebsocket();
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
                <div class="adminChat" v-show={store.state.showAdminChat}>
                    <div class="admin-input-group">
                        <input required type="text" name="text" autocomplete="off" class="admin-input" />
                        <label class="admin-user-label">Svara kund</label>
                    </div>
                    <div class="adminChatOutput"></div>
                    <button class="adminBtn" onClick={() => this.sendAdminMessage()}>Skicka</button>
                </div>
                <button class="showAdminChat" onclick={() => store.state.showAdminChat = true}>admin</button>
                <h1>{this.title}</h1>
                <div class="closeChatBtn" onClick={() => store.state.showChat = false}>
                </div>
                <div class="input-group">
                    <input required type="text" name="text" autocomplete="off" class="input" />
                    <label class="user-label">Har du någon fråga?</label>
                </div>
                <button class="btn" onClick={() => this.sendMessage()}>Skicka</button>
                <div class="chatOutp"></div>
                <h1>
                    {this.bokningar}
                </h1>
                <showbokings/>
            </div>
        )
    }
};