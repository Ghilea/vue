import { store } from "../store";

export default {
    data() {
        return {
            nameRes:'Resturang D.V.J'
        }
    },
    render() {
 
        return (
            <header class={`navbar ${ (store.state.menu_selected === 'barn') ? 'childpicture' : (store.state.menu_selected === 'par') ? 'couplepicture' : '' }`}>
                <div class="resname">
                <i class="fa-solid fa-utensils"></i>
                 {this.nameRes}
                 <i class="fa-solid fa-utensils"></i>
                </div>
            </header>
        )
    }
};