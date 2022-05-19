export default {
    data() {
        return {
            title: 'It’s not a stateroom, it’s home away from home for your adventure.',
            describe: 'Humble abode? More like humble brag. We’ve designed our cruise rooms with every type of guest in mind. From families and couples to groups of friends and solo travelers — the options are almost endless, and the comfort is always guaranteed.',
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
                    <router-link to='/vue/public/booking'>
                        <button>Boka rum</button>
                    </router-link>
                </header>
            </div>
        )
       
    }
};