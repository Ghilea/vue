import { spaTreatments } from '../data';


export default {
    methods: {
       spaT() {
        const spa = spaTreatments.map((item) => {
            return(<h1>{item.title}</h1>
             {item.treatment.map((item2) => {
                return <p> {item2.name} </p>
            }}))
        

            
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