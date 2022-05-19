import Activity from './activity';
import Explore from './explore';
import Food from './food';
import Room from './room';
import Events from './events';

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