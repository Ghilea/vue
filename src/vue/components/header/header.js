import { store } from "../store";
import Weather from "../weather/weather";

export default {
    data() {
        return {
            nameRes:'Lyxkryssning',
            img:'https://as2.ftcdn.net/v2/jpg/02/28/13/53/1000_F_228135369_EWQJsS9TEskImi51e5AxpEsYsonOIBMM.jpg',
        }
    },

    methods: {
        fetchData() {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=62df453d04ae87dfb0297b3560c79d98')
                .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(
                        data => {
                            this.weather = data.value,
                            this.main = data.weather
                        });
                }
                )
                .catch(function (err) {
                    console.log('Fetch Error: ', err);
                })
        },
        currentTime() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
            return date;
        }
    },

    
    render() {
 
        return (
            <header class={`navbar ${ (store.state.menu_selected === 'barn') ? 'childpicture' : (store.state.menu_selected === 'par') ? 'couplepicture' : '' }`}>
                
                <div class="resname">
                <img src={this.img}/>
                {this.nameRes}
                <div class="date">
                {this.currentTime()}
                <Weather />
                </div>
                </div>
            
            </header>
        )
       
    }
};