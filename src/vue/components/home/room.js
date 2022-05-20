export default {
    data() {
        return {
            title: 'Det är inte ett hytt, det är ett hem hemifrån för ditt äventyr.',
            describe: 'Ödmjuka boning? Mer som ödmjuk skryt. Vi har designat våra kryssningsrum med alla typer av gäster i åtanke. Från familjer och par till grupper av vänner och ensamresenärer - alternativen är nästan oändliga, och komforten är alltid garanterad.',
            img: './assets/image/home/room.jpg'
        }
    },    
    render() {
 
        return (
            <div class = 'room'>
                <img src={this.img} />
                <header>
                    <h2>{this.title}</h2>
                    <p>{this.describe}</p>
                    <router-link to = {
                        {
                            name: 'booking'
                        }
                    } >
                        <button>Boka rum</button>
                    </router-link>
                </header>
            </div>
        )
       
    }
};