export default {
    data() {
        return {
           title: 'The Many Sides of the Caribbean',
           describe: 'You can’t ask for a better place to get away from it all than the Caribbean. With over 80 islands in the Caribbean, and multiple cultures contributing to their creation, you can be sure no two regions are alike. Chill in the Eastern Caribbean, explore history in the Western Caribbean, marvel at natural wonders in Southern Caribbean. Discover the one-and-only Everglades in Florida, exotic rainforests in Costa Rica, and the never-ending beauty of the ABC Islands.'
        }
    },    
    render() {
 
        return (
            <div class='home'>
                <header>
                    <h2>{this.title}</h2>
                    <p>{this.describe}</p>
                </header>

                <div class='container'>
                    <div class='imgCard'></div>
                    <div class='imgCard'></div>
                    <div class='imgCard'></div>
                    <div class='imgCard'></div>
                </div>
            </div>
        )
       
    }
};