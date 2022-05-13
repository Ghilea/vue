import { store } from "../store";

export default {
    data() {
        return {
            nameRes: "Chat"
        }
    },

    methods: {
        
    },

    
    render() {
        
        return (
            <div>
                
                <div class="chat">
                {this.nameRes}
                </div>
            
            </div>
        )
       
    }
};