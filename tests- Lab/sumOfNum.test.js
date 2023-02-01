const { expect } = require('chai');
const {sum} = require('../sumOfNumbers');

describe('sum', () => {

    it('do take an array of number as an argument', ()=> {
    let arr = ['1', '2', '3'];
    let result = sum(arr);
    expect(result).to.be.equal(6)
    });
    
})