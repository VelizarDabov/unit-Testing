const assert = require('chai').assert;
const createCalculator = require('../addSubtract');

describe('createCalculator', function(){

let calc;
beforeEach(function(){
    calc = createCalculator();
});
it('should return object', function(){
    
    assert.isObject(createCalculator())
});
it('should return positive number when add', function() {
let input = 1;
calc.add(input);
assert.equal(calc.get(), 1)
});
it('should return negative number', function(){
let input = 1;
calc.subtract(input);
assert.equal(calc.get(), -1)
});
it('should return zero and subtract', function(){
    let input = 1;

    calc.add(input);
    calc.subtract(input);
    assert.equal(calc.get(), 0)
});
it('should return result as string ', function(){
    let input = '10';

    calc.add(input);
    
    assert.equal(calc.get(), 10)
});
it('is NaN', function(){
    let input = 'text';

    calc.add(input);
    
    assert.isNaN(calc.get())
});


})