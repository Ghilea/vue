import { store } from '../store';

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
                       'Havet',
                       '056-787442',
                       'E-mail: kryssning@info.se'
                   ]
               },
            bookings: {
                title: 'Bokningar',
                activity: 'Event: ',
                room : 'Antal rum kvar: ',
                restaurant: 'Antal platser i restaurangen: '
            },
            events: [
                'Swingersträff',
                'Dansband',
                'Show'
            ]
        }
    },
    mounted() {
        store.state.activeEvents = this.events[Math.floor(Math.random() * this.events.length)]
    },
    render() {

        const helpArray = this.needHelp.describe.map((item) => {
            return <a href="#"><p>{item}</p></a>
        })
        const contactArray = this.contact.describe.map((item) => {
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
                    <h2>{this.bookings.title}</h2>
                    <ul>
                        <li>
                            {
                                this.bookings.activity
                            }
                            {
                                store.state.activeEvents
                            }
                        </li>
                        <li>
                            {
                                this.bookings.room
                            }
                            {
                                store.state.totalBooking
                            }
                        </li>
                        <li>
                            {
                                this.bookings.restaurant
                            }
                            {
                                store.state.totalSeat
                            }
                        </li>
                    </ul>
                </section>
            </footer>
        )
    }
    
};