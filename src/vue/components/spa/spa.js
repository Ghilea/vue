import { spaTreatments } from '../data';


export default {
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
        

        return (
            <div>{this.spaT()}</div>
        )
        
    }             
};