import { events } from "@comp/event/dataEvent";

export default {
    data() {
        return{
            imgH:[{link:'./assets/image/flamingos.jpeg'},{link:'./assets/image/'},{link:'./assets/image/'},{link:'./assets/image/'}],
            imgF:[{link:'./assets/image/'},{link:'./assets/image/'},{link:'./assets/image/'},{link:'./assets/image/'}]
               
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
       const imgHeader = this.imgH.map((item) => {
        return(
            <img src={item.link} />
        )
        })
        const imgFooter = this.imgF.map((item) => {
            return(
             <img src={item.link} />
            )
    })
        return (
           
                <div>
                    <div class="container">
                        {imgHeader}
                    </div>

                    {event}

                    <div class ="container">
                        {imgFooter}
                    </div>
                </div>
            
        )
       
    }
};