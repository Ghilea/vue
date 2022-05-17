import { spaTreatments } from '../data';


export default {
    methods: {
       spaT() {
        const spa = spaTreatments.map((item) => {
            return(

                <div class="spaT">
                <h1>{item.title}</h1>
                {
                    item.treatment.map((item2) => {
                        return( 
                        <>
                        <div class="collum">
                        <h2>{item2.name}</h2>
                        </div>
                        <div class="collum">
                        <p>{item2.describe}</p>
                        </div>
                        <div class="collum">
                        <p>{item2.price}</p>  
                        </div>
                        </>
                        )      
                    })
                },
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