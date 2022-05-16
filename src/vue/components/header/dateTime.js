import axios from 'axios'

export default {
    data() {
        return {
            name:'Datum: ',
            showDateTime: ''
        }
    },
    methods: {
        currentTime() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
            this.showDateTime = date;
        }
    },
    beforeMount() {
        this.currentTime()
    },
    render() {
        return (
            <div class='dateTime'>
                <p>{this.name}{this.showDateTime}</p>
            </div>
        )
       
    }
};