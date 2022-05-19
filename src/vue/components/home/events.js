export default {
    data() {
        return {
            title: 'INCREDIBLE IS ON THE ITINERARY',
            describe: 'Whatever thrills you seek, you’ll find all sorts of ways to fill your days onboard Royal Caribbean®. Each day and night brings something new to do, see and explore. From the robot mixologists at Bionic Bar® to the FlowRider® surf simulators, and the tallest slide at sea, Ultimate Abyss℠, to hit Broadway musicals like Grease. And with the award-winning Adventure Ocean® youth program, kids and teens will have a blast— plus parents can get a little time of their own. The hardest part is deciding where to start.',
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