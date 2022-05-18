export default {
    data() {
        return {
            title: 'Dine Like a Local on your Caribbean Cruise',
            content: [
                {
                    title: 'Flavors & Seafood',
                    describe: "The Caribbean is not only blessed with the freshest seafood from the surrounding sea but culinary influences from all corners of the earth. You’ll enjoy a fusion of African, Creole, Cajun, Amerindian, Spanish, French, Latin America, Indian, and Chinese."
                },
                {
                    title: 'Rum & Spirits',
                    describe: "Nearly every island produces local rums that range from light white to heavy-bodied dark amber. Recipes are closely guarded secrets with specific varieties of wood and aging techniques. Make sure to also try a minty mojito or some Mexican tequila."
                },
                {
                    title: 'Chocolate',
                    describe: "The cacao trade here is respected around the world for producing some of the finest cacao beans to provide ingredients for many luxury chocolatiers across the globe. Look for tours of a local cacao plantation and learn how it goes from bean to bar."
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