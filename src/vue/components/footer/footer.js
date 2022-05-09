
export default {
    data() {
        return {
            needHelp: {
                title:'Need help',
                describe:[
                    'Policy',
                    'Om oss',
                    'Frågor & svar',
                    'Jobba hos oss'
                ],
            icons: [
                'fa-brands fa-facebook' ,
                'fa-brands fa-instagram' ,
                'fa-brands fa-twitter'

            ]
            },
           contact: {
                   title: 'Kontakt',
                   describe: [
                       'Klarabergsvägen 24, 653 78 Stockholm',
                       '056-787442',
                       'E-mail: test@resturang.se'
                   ]
               },
            open: {
                title: 'Öppttider',
                describe: [
                    'Måndag, Tisdag, Onsdag, Torsdag 16.00 - 22.30',
                    'Fredag 15.00 - 23.00',
                    'Lördag 13.00 - 23.00',
                    'Söndag 13.00 - 22.00'
                ]
            }
        }
    },
    render() {

        const helpArray = this.needHelp.describe.map((item) => {
            return <a href="#"><p>{item}</p></a>
        })
        const contactArray = this.contact.describe.map((item) => {
            return <p>{item}</p>
        })

        const openArray = this.open.describe.map((item) => {
            return <p>{item}</p>
        })

        const iconsArray = this.needHelp.icons.map((item) => {
            return <a href="#"><i class={item}></i></a>
        })

        return (
            <footer>
                <section>
                    <h2>{this.needHelp.title}</h2>
                    {helpArray}
                </section>
                <section>
                    <h2>{this.contact.title}</h2>
                    {contactArray}
                    <div class="icons">
                       {iconsArray}
                    </div>
                </section>
                <section>
                    <h2>{this.open.title}</h2>
                    {openArray}
                </section>
            </footer>
        )
    }
    
};