export default {
    data() {
        return {
            title: 'Unforgettable Shore Excursions',
            describe: 'There’s a variety of ways to explore your ports of call. Whether you’re a parent looking for family entertainment, a foodie out to explore local dishes and wines, or a history buff, we have a Caribbean cruise excursion tailored to your interests.',
            content: [
                {
                    title: 'Relax & Recharge',
                    describe: "The chill vibe of the Caribbean is the perfect place to refresh and renew yourself. Of course, basking on any beach is a must-do. There are many opportunities to snorkel among colorful reef fish on every island. Discover Bonaire’s salt flats and flamingoes as you catch some beach time. Journey to some of St. Thomas's most breathtaking viewpoints and scenic overlooks on a stunning island drive.",
                    img: './assets/image/home/relax.jpg'
                },
                {
                    title: 'Family Adventures',
                    describe: "Board a traditional schooner on a fun pirate journey along the breathtaking coast of St. Vincent. Hike through a verdant rainforest or climb a dormant volcano in St. Kitts. Swim with docile stingrays in waters off Grand Cayman. Journey into the depths of underwater Aruba aboard an Atlantis submarine. Travel to St. Thomas' Coral World Ocean Park for a ride past coral gardens and tropical fish aboard an eight-foot semi-submersible vessel.",
                    img: './assets/image/home/family.jpg'
                },
                {
                    title: 'Culture',
                    describe: "Journey beneath the earth on an adventure through Harrison’s Cave with limestone formations, bubbling streams, and waterfalls in Barbados. Explore the fascinating fortresses and history of San Juan’s walled city. Enjoy a Chef’s Market Discovery℠ with a shipboard chef as you source ingredients in Castries on St. Lucia and then enjoy a private dinner back onboard your ship.",
                    img: './assets/image/home/culture.jpg'
                }
           ]
        }
    },    
    render() {

        const content = this.content.map((item, index) => {
            return (
                <div class={`activityCard ${(index === 1) ? 'reverse' : ''}`}>
                    <div class='imgCard'>
                        <img src={item.img} />
                    </div>
                    <div class='textPanel'>
                        <h2>{item.title}</h2>
                        <p>{item.describe}</p>
                    </div>
                </div>
                
            )
        })
 
        return (
            <div class = 'activity'>
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