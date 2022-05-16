export default {
    data() {
        return {
            name:'Väder',
            
        }
    },
    methods: {
        fetchData() {

            console.log('test2');
            const data = fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=62df453d04ae87dfb0297b3560c79d98')
                .then(response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                        
                    }

                    response.json().then(data => {
                        return data;
                    });

                })
                .catch(function (err) {
                    console.log('Fetch Error: ', err);
                })

                console.log('test' + data);
                return data;
        },
      
    },

    
    render() {
        console.log(this.fetchData())

        return (
            <div>
                {this.name}
            </div>
        )
       
    }
};