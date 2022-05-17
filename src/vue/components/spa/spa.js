import { spaTreatments } from '../data';


export default {
    methods: {
       spaT() {
        const spa = spaTreatments.map((item) => {
            return(

                <div>
                <h1>{item.title}</h1>
                {
                    item.treatment.map((item2) => {
                        return( 
                        <>
                        <h2>{item2.name}</h2>
                        <p>{item2.describe}</p>
                        <div>
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