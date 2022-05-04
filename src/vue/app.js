Vue.createApp({
    data() {

        const childrenMenu = {
            first: {
                title: 'Smarrig plockmat'
            },
            second: {
                title: 'Barnens favoriter'
            },
            third: {
                title: 'Varmt var det här'
            }
        }

        const adultMenu = {
            first: {
                title: 'Tilltugg & smårättter',
                dish: [
                    {
                        name: 'Friterad kycklingsnacks med chilibearnaise',
                        describe: 'Deep fried chiken with chilibearnaise'
                    },
                    {
                        name: 'Husets toast skagen',
                        describe: 'Smörstekt surdegsbröd med räckor, kräftsjärtar, majonnäs, dill & citron toppad med löjrom'
                    }
                ]
            },
            second: {
                title: 'Förrätter'
            },
            third: {
                title: 'Varmrätter'
            }
        }

        let guestType = 'Vuxen'

        return {
            title: 'Meny',
            guest: guestType,
            menu: {
                first: (guestType === 'Barn') ? childrenMenu.first.title : (guestType === 'Vuxen') ? adultMenu.first.title : '',
                second: (guestType === 'Barn') ? childrenMenu.second.title : (guestType === 'Vuxen') ? adultMenu.second.title : ''
            }
        }
        
    }
}).mount('#app')
