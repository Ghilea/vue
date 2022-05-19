export default {
    data() {
        return {
            title: 'Ät som en lokal på din karibiska kryssning',
            content: [
                {
                    title: 'Smaker & skaldjur',
                    describe: "Karibien är inte bara välsignad med de färskaste skaldjuren från det omgivande havet utan kulinariska influenser från jordens alla hörn. Du kommer att njuta av en blandning av afrikanska, kreolska, cajun, indiska, spanska, franska, latinamerika, indiska och kinesiska."
                },
                {
                    title: 'Rom & Sprit',
                    describe: "Nästan varje ö producerar lokal rom som sträcker sig från ljus vit till kraftig mörk bärnsten. Recept är noga bevarade hemligheter med specifika trävarianter och åldringstekniker. Se till att också prova en mintig mojito eller lite mexikansk tequila."
                },
                {
                    title: 'Choklad',
                    describe: "Kakaohandeln här är respekterad runt om i världen för att producera några av de finaste kakaobönorna för att tillhandahålla ingredienser till många lyxchokladtillverkare över hela världen. Leta efter rundturer i en lokal kakaoplantage och lär dig hur det går från böna till bar."
                }
           ]
        }
    },    
    render() {

        const content = this.content.map((item) => {
            return (
                <div class='imgCard'>
                    <h2>{item.title}</h2>
                    <p>{item.describe}</p>
                </div>
            )
        })
 
        return (
            <div class='food'>
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