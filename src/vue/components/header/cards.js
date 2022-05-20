export default {
    data() {
        return {
            title: 'Välkommen till att njuta i lyx',
            cards: [
                {
                    class: 'spa',
                    name: 'Spa',
                    describe: 'En underbar upplevese',
                    link: 'spa',
                    button: 'Lär mer'
                }, {
                    class: 'event',
                    name: 'Evenemang',
                    describe: 'Upptäck glädjen',
                    link: 'events',
                    button: 'Lär mer'
                }, {
                    class: 'restaurant',
                    name: 'Restaurang',
                    describe: 'En smakfull kväll',
                    link: 'restaurant',
                    button: 'Lär mer'
                }, {
                    class: 'booking',
                    name: 'Bokningar',
                    describe: 'Missa inte att boka',
                    link: 'booking',
                    button: 'Lär mer'
                }
            ]
        }
    },
    render() {

        const cards = this.cards.map((item) => {
            return (
                <div class={item.class}>
                    <div div class='front'>
                        <div class='inner'>
                            <h2>{item.name}</h2>
                            <p>{item.describe}</p> 
                        </div>
                    </div>
                    <router-link to = {{name: item.link}}>
                    <div class='back'>
                        <div class='inner'>
                            <h2>{item.button}</h2>
                        </div>
                    </div>
                    </router-link>
                </div>
            )
        })

        return (
            <div class='cards'>
                <h1>{this.title}</h1>
                <div class='flexIt'>
                    {cards}
                </div>
            </div>
        )
       
    }
};