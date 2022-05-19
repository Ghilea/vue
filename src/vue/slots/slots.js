import Slots from './slots.vue';

export default {
    data(){
        return {
            string: 'Hej'
        }
    },
    render() {
        return (
            <div>
                <Slots>
                    {this.string}
                </Slots>
            </div>
        )
    }
};