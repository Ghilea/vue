export default {
    data() {
        return {
            title: 'Oförglömliga strandutflykter',
            describe: 'Det finns en mängd olika sätt att utforska dina anlöpshamnar. Oavsett om du är en förälder som letar efter familjeunderhållning, en matgäst för att utforska lokala rätter och viner, eller en historiefantast, har vi en karibisk kryssningsutflykt skräddarsydd för dina intressen.',
            content: [
                {
                    title: 'Slappna av och ladda om',
                    describe: "Den kyliga atmosfären i Karibien är den perfekta platsen att fräscha upp och förnya dig själv. Naturligtvis är det ett måste att sola sig på vilken strand som helst. Det finns många möjligheter att snorkla bland färgglada revfiskar på varje ö. Upptäck Bonaires saltslätter och flamingos medan du tar lite strandtid. Res till några av St. Thomas mest hisnande utsiktspunkter och natursköna utsikter på en fantastisk ö-tur.",
                    img: '@img/home/relax.jpg'
                },
                {
                    title: 'Familjeäventyr',
                    describe: "Gå ombord på en traditionell skonare på en rolig piratresa längs St. Vincents hisnande kust. Vandra genom en grönskande regnskog eller bestiga en vilande vulkan i St. Kitts. Simma med fogliga stingrockor i vattnet utanför Grand Cayman. Res in i djupet av Aruba under vattnet ombord på en Atlantis-ubåt. Res till St. Thomas' Coral World Ocean Park för en tur förbi korallträdgårdar och tropiska fiskar ombord på ett åtta fots halvt nedsänkbart fartyg.",
                    img: './assets/image/home/family.jpg'
                },
                {
                    title: 'Kultur',
                    describe: "Resa under jorden på ett äventyr genom Harrisons grotta med kalkstensformationer, bubblande bäckar och vattenfall i Barbados. Utforska de fascinerande fästningarna och historien om San Juans muromgärdade stad. Njut av en Chef's Market Discovery℠ med en kock ombord när du köper ingredienser i Castries på St. Lucia och njut av en privat middag ombord på ditt skepp.",
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