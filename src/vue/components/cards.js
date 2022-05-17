export default {
    data() {
        return {
            name:'Väder: ',
            showWeather: ''
        }
    },
    methods: {
      
    },
    beforeMount() {
   
    },
    render() {
        return (
            <div class='cards'>
                <div class='spa'>
                    
                    <div div class='front'>
                        <div class='inner'>
                            <h2>front</h2>
                        </div>
                    </div>
                    <div class='back'>
                        <div class='inner'>
                            <h2>Back</h2>
                        </div>
                    </div>
                    
                </div>
                <div class='event'>

                    <div class='img'></div>

                </div>
                <div class='restaurant'>

                    <div class='img'></div>

                </div>
                <div class='booking'>

                    <div class='img'></div>

                </div>
            </div>
        )
       
    }
};