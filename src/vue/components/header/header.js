import { store } from "../store";
import Weather from "./weather";
import DateTime from "./dateTime";

export default {
    data() {
        return {
            name:'Lyxkryssning',
            img:'https://as2.ftcdn.net/v2/jpg/02/28/13/53/1000_F_228135369_EWQJsS9TEskImi51e5AxpEsYsonOIBMM.jpg',
        }
    },    
    render() {
 
        return (
            <header class={`navbar ${ (store.state.menu_selected === 'barn') ? 'childpicture' : (store.state.menu_selected === 'par') ? 'couplepicture' : '' }`}>
                <div class="logo">
                    <img src={this.img}/>
                    <p>{this.name}</p>
                </div>
                <DateTime />
                <Weather />
            </header>
        )
       
    }
};