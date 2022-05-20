import { store } from "@comp/store";
import Weather from "@comp/header/weather";
import DateTime from "@comp/header/dateTime";
import Cards from '@comp/header/cards';

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
                <router-link to = {{name: 'home'}} >
                    <div class="logo">
                        <img src={this.img}/>
                        <p>{this.name}</p>
                    </div>
                </router-link>
                <Cards />
                <DateTime />
            </header>
        )
       
    }
};