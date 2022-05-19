import { events } from "./dataEvent";

export default {
    data() {
        return {
           
        }
    },
    methods:{
       
    }, 
      
    render() {
        console.log(events)
        const event = events.map((item) => {
            return(
           
               <div>
               <h1>{item.title}</h1>
               <div class="row">
               {

                   item.todos.map((item2) => {
                       console.log(item2)
                       return( 
                       <>
                       <div class="column p-name">
                       <p >{item2.name}</p>
                       </div>
                       <div class="column p-time">
                       <p>{item2.time}</p>
                       </div>
                       <div class="column p-describe">
                       <p>{item2.describe}</p>
                       </div>
                       </>
                       )   
                   })

               }
               </div>
               </div>
            )   
       })
        return (
           
                <div>
                    {event}
                </div>
            
        )
       
    }
};