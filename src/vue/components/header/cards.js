export default {
    data() {
        return {
            spa: {
                name: 'Spa',
                describe: 'En underbar upplevese'
            },
            event: {
                name: 'Swingersklubbar',
                describe: 'Njut'
            },
            restaurant: {
                name: 'Restaurang',
                describe: 'En smakfull kväll'
            },
            booking: {
                name: 'Rum',
                describe: 'Njut av utsikten'
            }

        }
    },
    methods: {
      
    },
    beforeMount() {
   
    },
    render() {
        return (
            <div class='cards'>
                <h1>Välkommen till att njuta i lyx</h1>
                <div class='flexIt'>
                    <div class='spa'>

                        <div div class='front'>
                            <div class='inner'>
                                <h2>{this.spa.name}</h2>
                                <p>{this.spa.describe}</p> 
                            </div>
                        </div>
                        <router-link to = '/vue/public/spa'>
                        <div class='back'>
                            <div class='inner'>
                                <h2>Back</h2>
                            </div>
                        </div>
                        </router-link>
                    </div>
                    <div class='event'>

                        <div div class='front'>
                            <div class='inner'>
                                <h2>{this.event.name}</h2>
                                <p>{this.event.describe}</p>
                            </div>
                        </div>
                        <div class='back'>
                            <div class='inner'>
                                <h2>Back</h2>
                            </div>
                        </div>

                    </div>
                    <div class='restaurant'>

                        <div div class='front'>
                            <div class='inner'>
                                <h2>{this.restaurant.name}</h2>
                                <p>{this.restaurant.describe}</p>
                            </div>
                        </div>
                        <router-link to='/vue/public/restaurant'>
                        <div class='back'>
                            <div class='inner'>
                                <h2>Back</h2>
                            </div>
                        </div>
                        </router-link>

                    </div>
                    <div class='booking'>

                        <div div class='front'>
                            <div class='inner'>
                                <h2>{this.booking.name}</h2>
                                <p>{this.booking.describe}</p>
                            </div>
                        </div>
                        <div class='back'>
                            <div class='inner'>
                                <h2>Back</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
       
    }
};