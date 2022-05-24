import { store } from '@comp/store';

export default {

    render() {

        return (
        <>
                <p class="bokingfat">Restaurangbokningar </p>
                    <div>
                    {store.state.restaurantBooking}
                    </div>

                    <p class="bokingfat">Bokade rum </p>
                        <div>
                        {store.state.roomBooking}
                        
                        </div>

                        <p class="bokingfat">Bokad spa </p>
                            <div>
                            {store.state.spaBooking}
                            </div>
                        </>
                        )
}
};