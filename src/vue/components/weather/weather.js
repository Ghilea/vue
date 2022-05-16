export default {
    data() {
        return {
            name:'Väder',
            
        }
    },
    methods: {
            weatherBalloon () {
            var key = '62df453d04ae87dfb0297b3560c79d98';
            fetch('https://api.openweathermap.org/data/2.5/weather?id=' +2643743+ '&appid=' + key)
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data.weather)
                let weather = data.weather;
                return weather;
            })
            .catch(function() {
              // catch any errors
            });
          },
      
    },

    
    render() {

        return (
            <div>
                {this.name}
                {this.weatherBalloon()}
            </div>
        )
       
    }
};