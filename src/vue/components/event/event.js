import { events } from "@comp/event/dataEvent";

export default {
    data() {
        return{
            imgH:[
            {link:'./assets/image/kinkyflamingo.jpg'},
            {link:'./assets/image/eric_saade.png'},
            {link:'./assets/image/carola_andersB.png'},
            {link:'./assets/image/justin_beiber.jpg'}],
            imgF:[
            {link:'./assets/image/bar.jpg'},
            {link:'./assets/image/gym.jpg'},
            {link:'./assets/image/meditation.jpg'},
            {link:'./assets/image/pool.webp'}]
               
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
                    <div class="containerHF">
                        {imgHeader}
                    </div>

                    {event}

                    <div class ="containerHF">
                        {imgFooter}
                    </div>
                </div>
            
        )
       
    }
};