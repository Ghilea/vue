import Slots from '@comp/slots/slots.vue';

export default {
    data(){
        return {
            string: 'Hej'
        }
    },
    render() {
        return (
            <div>
                <Slots />
                <Slots>
                    {this.string}
                </Slots>
            </div>
        )
    }
};