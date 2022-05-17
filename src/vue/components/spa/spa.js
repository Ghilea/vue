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
                        <div class="column">
                        <h2>{item2.name}</h2>
                        </div>
                        <div class="column">
                        <p>{item2.describe}</p>
                        </div>
                        <div class="column">
                        <p>{item2.price}</p>  
                        </div>
                        </>
                        )      
                    })
                    
                }
                </div>
                </div>
            )  
        })
    }
},
    render() {
        

        return (
            <div>{this.spaT()}</div>
        )
        
    }             
};