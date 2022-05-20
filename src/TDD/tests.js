const chai = window.chai
const expect = chai.expect

describe('getCelcius', () => {
    it('Ska göra om farenheit till celcius från en array med värden', () => {
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
        
    })
}) 

describe('currentTime', () => {
    it('Ska visa dagens datum', () => {
        expect(currentTime()).to.deep.equal('20/5/2022')

    })
})

describe('changeValue', () => {
    it('ändra value', () => {
        expect(changeValue()).to.deep.equal(300)

    })
})