export default {
    data() {
        return {
           contact: {
                   title: 'Kontakt',
                   describe: [
                       'Klarabergsvägen 24, 653 78 Stockholm',
                       '056-787442',
                       'blabla'
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
        const contactArray = this.contact.describe.map((item) => {
            return <p>{item}</p>
        })

        const openArray = this.open.describe.map((item) => {
            return <p>{item}</p>
        })

        return (
            <footer>
                <section>
                    <h2>{this.contact.title}</h2>
                    {contactArray}
                </section>

                <section>
                    <h2>{this.open.title}</h2>
                    {openArray}
                </section>
            </footer>
        )
    }
    
};