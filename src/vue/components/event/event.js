import { events } from "./dataEvent";

export default {
    data() {
        return {
           
        }
    },
    methods:{
        eventS(){
            const event = events.map((item) => {
             return(
                <div>

                </div>
             )   
        })
    },    
    render() {
 
        return (
            <>
                <div>Detta är events</div>
            </>
        )
       
    }
}};