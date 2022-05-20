import { store } from '@comp/store';

export default {
    render() {

        return (
            <div>
                <div class="chatmenu" onClick = {
                () => store.state.showChat = true
            } >
                    <a class="chatbtn">
                        <i class="fa-solid fa-bell-concierge"></i>
                    </a>
                </div>
            
            </div>

        )
    }
};