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
                <div class='spa btn'>
                    <div class='front'>
                        <h2>Titel</h2>
                        <div class='frosted'></div>
                    </div>
                    <div class='back'>
                        <div class='img'></div>
                    </div>
                    
                </div>
                <div class='event btn'>
                    <h2>Titel</h2>
                    <div class='img'></div>
                    <div class='frosted'></div>
                </div>
                <div class='restaurant btn'>
                    <h2>Titel</h2>
                    <div class='img'></div>
                    <div class='frosted'></div>
                </div>
                <div class='booking btn'>
                    <h2>Titel</h2>
                    <div class='img'></div>
                    <div class='frosted'></div>
                </div>
            </div>
        )
       
    }
};