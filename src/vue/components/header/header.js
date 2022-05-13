import { store } from "../store";

export default {
    data() {
        return {
            nameRes:'Lyxkryssning',
            img:'https://as2.ftcdn.net/v2/jpg/02/28/13/53/1000_F_228135369_EWQJsS9TEskImi51e5AxpEsYsonOIBMM.jpg',
        }
    },
    render() {
        const date = new Date()
        console.log(date)
        return (
            <header class={`navbar ${ (store.state.menu_selected === 'barn') ? 'childpicture' : (store.state.menu_selected === 'par') ? 'couplepicture' : '' }`}>
                
                <div class="resname">
                <img src={this.img}/>
                {this.nameRes}
                <div class="date">
                {date}
                </div>
                </div>
            
            </header>
        )
       
    }
};