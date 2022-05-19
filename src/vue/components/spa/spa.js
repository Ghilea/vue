import { spaTreatments } from './dataSpa';


export default {
    data(){
        return{
            imgHeader:[{link:'./assets/image/massage.jpg'},{link:'./assets/image/ansiktsbehandling.jpg'},{link:'./assets/image/spa-5.jpg'}],
            imgFooter:[{link:'./assets/image/sauna.jpg'},{link:'./assets/image/manikyr.jpg'},{link:'./assets/image/Fisk-spa.jpg'}]
               
        }
    },
    methods: {
       spaT() {
        const spa = spaTreatments.map((item) => {
            return(

                <div>
                <h1>{item.title}</h1>
                <div class="row">
                {

                    item.treatment.map((item2) => {
                        return( 
                        <>
                        <div class="column p-name">
                        <p >{item2.name}</p>
                        </div>
                        <div class="column p-describe">
                        <p>{item2.describe}</p>
                        </div>
                        <div class="column p-price">
                        <p>{item2.price} :-</p>
                        </div>
                        </>
                        )
                    })

                }
                </div>
                </div>
            )
        })

        return spa;
       }
         
    },
    render() {
        
        const imgHeader = this.imgHeader.map((item) => {
            return(
                <img src={item.link} />
            )
        })
        const imgFooter = this.imgFooter.map((item) => {
            return(
                <img src={item.link} />
            )
        })
        return (
            
            <div>
                {imgHeader}
                {this.spaT()}
                {imgFooter}
            </div>
            
        )
        
    }             
};