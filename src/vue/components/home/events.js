export default {
    data() {
        return {
            title: 'Vad du än gillar',
            describe: 'Oavsett vilken spänning du söker hittar du alla möjliga sätt att fylla dina dagar ombord på Royal Caribbean®. Varje dag och natt ger något nytt att göra, se och utforska. Från robotmixologerna på Bionic Bar® till FlowRider® surfsimulatorerna och den högsta rutschkanan till sjöss, Ultimate Abyss℠, till Broadwaymusikaler som Grease. Och med det prisbelönta ungdomsprogrammet Adventure Ocean® kommer barn och tonåringar att trivas – plus att föräldrar kan få lite egen tid. Det svåraste är att bestämma var man ska börja.',
            content: [
                {
                    title: 'Shower & underhållning',
                    button: 'Läs mer',
                    img: './assets/image/home/show.jpg'
                },
                {
                    title: 'Casino royal',
                    button: 'Läs mer',
                    img: './assets/image/home/casino.jpg'
                },
                {
                    title: 'För barn & ungdomar',
                    button: 'Läs mer',
                    img: './assets/image/home/children.jpg'
                },
                {
                    title: 'Nattelivet',
                    button: 'Läs mer',
                    img: './assets/image/home/night.jpg'
                },
                {
                    title: 'Swingersträffar',
                    button: 'Läs mer',
                    img: './assets/image/home/swingers.jpg'
                }
           ]
        }
    },    
    render() {

        const content = this.content.map((item, index) => {
            return (
                <div class='imgCard'>
                    <img src={item.img} />
                    <h2>{item.title}</h2>
                    <button>{item.button}</button>
                </div>
            )
        })
 
        return (
            <div class='events'>
                <header>
                    <h2>{this.title}</h2>
                    <p>{this.describe}</p>
                </header>

                <div class='container'>
                    {content}
                </div>
            </div>
        )
       
    }
};