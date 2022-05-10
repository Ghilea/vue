export default {
    data() {
        return {
            nameRes:'Resturang D.V.J.A '
        }
    },
    render() {

        return (
            <header class="navbar">
                <div class="resname">
                <i class="fa-solid fa-utensils"></i>
                 {this.nameRes}
                 <i class="fa-solid fa-utensils"></i>
                </div>
            </header>
        )
    }
};