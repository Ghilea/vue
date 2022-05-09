import { store } from '../store';

export default {
    data() {
        return {
            title: 'Totalsumma: '
        }
    },
    render() {

        return (
            <header class="navbar">
                <div>
                    {this.title}
                    {store.state.totalCost} kr
                </div>
            </header>        
        )
    }
    
};