const { expect } = require('chai')
const { sum, product } = require("../utils/myMath");

describe('sum', () => {
    it('should return correct result with array of numbers', () =>{
//Arange
let array = [1,2,3,4];
//act
let result = sum(array);
//Assert
if(result != 10){
expect(result).to.be.equal(10)
}
    });
    it('should return NaN if input is non an array', ()=>{
let invalidArray = 'Invalid array';
let result = sum(invalidArray);
expect(result).to.be.NaN;

    });
    it('should calculate correct result with array of mixed types', ()=>{
let array = ['1', true, 2];
let result = sum(array);
expect(result).to.be.equal(4)
    });

   
})