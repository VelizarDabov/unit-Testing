const rentCar = require('./rentCar')
const assert = require('chai').assert;

describe('Rent car', function(){
it('search car', () =>{
    assert.equal(rentCar.searchCar(['a', 'b', 'c'], 'a'), `There is 1 car of model a in the catalog!` );
    assert.equal(rentCar.searchCar(['a', 'a', 'c'], 'a'), `There is 2 car of model a in the catalog!` )
    assert.equal(rentCar.searchCar(['a', 'a', 'a'], 'a'), `There is 3 car of model a in the catalog!` )
})
it('throw search error', ()=>{
    assert.throw(()=> rentCar.searchCar([], 'a'), 'There are no such models in the catalog!');
    assert.throw(()=> rentCar.searchCar('abc', 'a'), 'Invalid input!');
    assert.throw(()=> rentCar.searchCar(123, 'a'), 'Invalid input!');

})

it('calculate price of car', () =>{
    assert.throw(() => rentCar.calculatePriceOfCar('1', '1'), 'Invalid input');
    assert.throw(() => rentCar.calculatePriceOfCar(1, '1'), 'Invalid input')
    assert.throw(() => rentCar.calculatePriceOfCar(1, 1), 'Invalid input')
})
it('correct price and model', ()=>{
    assert.equal(rentCar.calculatePriceOfCar('BMW', 1),`You choose BMW and it will cost $45!`)
    assert.equal(rentCar.calculatePriceOfCar('BMW', 2),`You choose BMW and it will cost $90!`)
    assert.equal(rentCar.calculatePriceOfCar('BMW', 4),`You choose BMW and it will cost $180!`)
})
it('no such model in catalog', ()=>{
    assert.throw(() => rentCar.calculatePriceOfCar('asdf', 1),'No such model in the catalog!');
    assert.throw(() => rentCar.calculatePriceOfCar('bmw', 1),'No such model in the catalog!')
})
it('validate input chechBudget', () => {
assert.throw(() => rentCar.checkBudget('100', 1, 100), 'Invalid input!');
assert.throw(() => rentCar.checkBudget('100', '1', 100), 'Invalid input!');
assert.throw(() => rentCar.checkBudget('100', '1', '100'), 'Invalid input!');
assert.throw(() => rentCar.checkBudget(100, 1, '100'), 'Invalid input!')
assert.throw(() => rentCar.checkBudget('100', 1, '100'), 'Invalid input!')
assert.throw(() => rentCar.checkBudget('100', 1, 100), 'Invalid input!')
assert.throw(() => rentCar.checkBudget(100, '1', 100), 'Invalid input!')
assert.throw(() => rentCar.checkBudget(100, 1, '100'), 'Invalid input!')
})
it('enough budget to rent a car', ()=> {
assert.equal(rentCar.checkBudget(50, 1, 100), 'You rent a car!');
assert.equal(rentCar.checkBudget(100, 1, 100), 'You rent a car!');
assert.equal(rentCar.checkBudget(50, 2, 100), 'You rent a car!');
})
it('not enough budget', () => {
    assert.equal(rentCar.checkBudget(51, 1 ,50),'You need a bigger budget!');
    assert.equal(rentCar.checkBudget(100, 1 ,50),'You need a bigger budget!');
    assert.equal(rentCar.checkBudget(100, 2 ,99),'You need a bigger budget!');
})


})
