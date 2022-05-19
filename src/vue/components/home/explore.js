export default {
    data() {
        return {
            title: 'Flera av Karibiens sidor',
            describe: 'Du kan inte begära ett bättre ställe att komma bort från allt än Karibien. Med över 80 öar i Karibien och flera kulturer som bidrar till deras skapelse, kan du vara säker på att ingen region är den andra lik. Slappna av i östra Karibien, utforska historien i västra Karibien, förundras över naturliga underverk i södra Karibien. Upptäck de enda Everglades i Florida, exotiska regnskogar i Costa Rica och den oändliga skönheten på ABC-öarna.',
            content: [
                {
                    title: 'Antigua',
                    button: 'Utforska Antigua',
                    img: './assets/image/home/antigua.jpg'
                },
                {
                    title: 'Aruba',
                    button: 'Utforska Aruba',
                    img: './assets/image/home/aruba.jpg'
                },
                {
                    title: 'Belize',
                    button: 'Utforska Belize',
                    img: './assets/image/home/belize.jpg'
                },
                {
                    title: 'Bonaire',
                    button: 'Utforska Bonaire',
                    img: './assets/image/home/bonaire.jpg'
                },
                {
                    title: 'Centralamerika',
                    button: 'Utforska Centralamerika',
                    img: './assets/image/home/central_america.jpg'
                },
                {
                    title: 'Costa Rica',
                    button: 'Utforska Costa Rica',
                    img: './assets/image/home/costa_rica.jpg'
                }
           ]
        }
    },    
    render() {

        const content = this.content.map((item) => {
            return (
                <div class='imgCard'>
                    <img src={item.img} />
                    <h2>{item.title}</h2>
                    <button>{item.button}</button>
                </div>
            )
        })
 
        return (
            <div class='explore'>
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