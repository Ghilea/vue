import { store } from "../store";

export default {
    data() {
        return {
            name:'Väder',
            
        }
    },

    methods: {
        fetchData() {
            let weather = []
            fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=62df453d04ae87dfb0297b3560c79d98')
                .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        
                    }

                    response.json().then(
                        data => {
                             this.weather = data.value
                        });
                        weather = data
                    
                }
                )
                .catch(function (err) {
                    console.log('Fetch Error: ', err);
                })
                return weather;
        },
      
    },

    
    render() {
       
        return (
            <div>
                {console.log(this.fetchData())}
                
            </div>
        )
       
    }
};