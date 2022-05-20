import { store } from "@comp/store";

export default {
    data() {
        return {

        }
    },

    methods: {
        restaurantBook() {
            const date = document.querySelector('.resDate');
            const time = document.querySelector('.resTime');

            store.state.restaurantBooking.push(date.value, time.value);
            store.state.totalSeat -= 1;
            console.log(store.state.restaurantBooking);
            console.log(store.state.totalSeat);
        },
        roomBook() {
            const date = document.querySelector('.roomDateArr');
            const leave = document.querySelector('.roomDateDep');

            store.state.roomBooking.push(date.value, leave.value);
            store.state.totalBooking -= 1;
            console.log(store.state.roomBooking);
        },
        spaBook() {
            const date = document.querySelector('.spaDate');
            const type = document.querySelector('.spaType option:checked');

            store.state.spaBooking.push(date.value, type.value);
            console.log(store.state.spaBooking);
        },
    },


    render() {

        return (
            <>
                <h1>
                    Här hittar du alla våra bokningsbara aktiviteter.
                </h1>
                <p class="info">Välkommen till vår bokningssida! <br/>
                    Reser du ensam, med familj eller i par? Vi har olika hytter för dina önskemål. <br/>
                    Vill du även säkra din plats i resturangen kan du boka din plats redan nu. <br/>
                    Och om ni vill lyxa till det mer har vi även spabehandlingar ni kan förboka, <br/>
                    men det går också bra att boka på plats i receptionen.<br/>
                    Vid frågor är ni varmt välkomna att kontakta oss via våra kontaktuppgifter.<br/>
                    <br/><br/>
                    056-787442<br/>
                    kryssning@info.se
                </p>
                <div class="bookingknappar">
                    <button class="bookButton" onClick={() => store.state.restaurantModal = true}>Boka Resturang</button>
                    <div class="restaurantModal" v-show={store.state.restaurantModal}>
                        <button class="closeBtn" onClick={() => store.state.restaurantModal = false}></button>
                        Resturang
                        <input class="resDate" type="date" placeholder="Vilken dag?" />
                        <input class="resTime" type="time" placeholder="Vilken tid" />
                        <button class="bookBtn" onClick={() => this.restaurantBook()}>Skicka</button>
                    </div>
                    <button class="bookButton" onClick={() => store.state.roomModal = true}>Boka Rum</button>
                    <div class="roomModal" v-show={store.state.roomModal}>
                        <button class="closeBtn" onClick={() => store.state.roomModal = false}></button>
                        Rum
                        <input class="roomDateArr" type="date" placeholder="Ankomstag" />
                        <input class="roomDateDep" type="date" placeholder="När lämnar du oss?" />
                        <button class="bookBtn" onClick={() => this.roomBook()}>Skicka</button>
                    </div>
                    <button class="bookButton" onClick={() => store.state.spaModal = true}>Boka Spa</button>
                    <div class="spaModal" v-show={store.state.spaModal}>
                        <button class="closeBtn" onClick={() => store.state.spaModal = false}></button>
                        Spa
                        <input class="spaDate" type="date" placeholder="Välj dag" />
                        <select class="spaType">
                            <option class="opt1">Ansikte 80 min</option>
                            <option class="opt2">Ansikte 50 min</option>
                            <option class="opt3">Ansikte 20 min</option>
                            <option class="opt4">Lymfmassage</option>
                            <option class="opt5">Klassisk</option>
                            <option class="opt6">Hot stone</option>
                            <option class="opt7">Aroma anti-stress</option>
                            <option class="opt8">Gelelackning</option>
                            <option class="opt9">Manikyr inkl. lackfärg</option>
                            <option class="opt10">Nagelförstärkning/påfyllning gele</option>
                            <option class="opt11">Nagelförlängning nytt sätt</option>
                            <option class="opt12">Kroppskrub</option>
                            <option class="opt13">Huvudharmoni</option>
                            <option class="opt14">Fotharmoni</option>
                            <option class="opt15">Garra ruffa</option>
                            <option class="opt16">Inpackning</option>
                        </select>
                        <button class="bookBtn" onClick={() => this.spaBook()}>Skicka</button>
                    </div>
                </div>
            </>
        )

    }
};