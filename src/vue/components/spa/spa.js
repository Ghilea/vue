import { spaTreatments } from '../data';


export default {
    methods: {
       test() {
        const hej = spaTreatments.map((item) => {
            const data = item.treatment.map((item2) => {
                return <p> {item2.name} </p>
            })

            return data
        })

        return hej;
       }
         
    },
    render() {
        

        return (
            <div>{this.test()}</div>
        )
        
    }             
};