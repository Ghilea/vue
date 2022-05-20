import Activity from '@comp/home/activity';
import Explore from '@comp/home/explore';
import Food from '@comp/home/food';
import Room from '@comp/home/room';
import Events from '@comp/home/events';

export default {
    render() {

        return (
            <>
                <Explore />
                <Events />
                <Room />
                <Activity />
                <Food />
            </>
        )
       
    }
};