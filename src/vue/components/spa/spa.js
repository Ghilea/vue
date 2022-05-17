import { spaTreatments } from '../data';


export default {
    methods: {
       
         
    },
    render() {
        const treatment = spaTreatments.map((item)=>{
            const data = item.treatment.map((item2)=>{
               
               return <p>{item2.name}</p>

           })

           return data;
        })

        return (
            {treatment}
        )
        
    }             
};