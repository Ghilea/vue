import axios from 'axios'

export default {
    data() {
        return {
            name:'Väder',
            showWeather: []
        }
    },
    methods: {
        weather () {
            const key = 'f980892b9adf9cc107ab0ba8a73230fc';
            const url = 'https://api.openweathermap.org/data/2.5/weather?id=' + 2643743 + '&appid=' + key;
            
            axios.get(url)
            .then(res => res.data)
            .then(data => {
                if (data !== undefined || data !== '') {
                    this.showWeather = data.weather;
                }
            })
        }
    },
    beforeMount() {
        this.weather();
    },
    render() {
     
        console.log(this.showWeather)

        return (
            <div>
                {this.name}
                {this.showWeather}
            </div>
        )
       
    }
};