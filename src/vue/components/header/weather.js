import axios from 'axios'

export default {
    data() {
        return {
            name:'Väder: ',
            showWeather: ''
        }
    },
    methods: {
        weather () {
            const key = ''//'e9544c9ceb9a2e2513c480ae14274e78';
            const url = 'https://api.openweathermap.org/data/2.5/weather?id=' + 2643743 + '&appid=' + key;
            
            axios.get(url)
            .then(res => res.data)
            .then(data => {
                data.weather.map((item) => {
                    this.showWeather = item.description
                })
            })
        }
    },
    beforeMount() {
        this.weather();
    },
    render() {
     
        return (
            <div class='weather'>
                <p>{this.name}{this.showWeather}</p>
            </div>
        )
       
    }
};