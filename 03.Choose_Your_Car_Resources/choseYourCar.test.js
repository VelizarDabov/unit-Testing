const chooseYourCar = require('./chooseYourCar')
const assert = require('chai').assert;

describe('chose your car test', function(){
    it('check the type', () => {
        assert.throw(() => chooseYourCar.choosingType(('Sedan', 'red', 2010), 'combi'), "This type of car is not what you are looking for.");
        assert.throw(() => chooseYourCar.choosingType(('Sedan', 'red', 2010), 1), "This type of car is not what you are looking for.");
        assert.throw(() => chooseYourCar.choosingType(('Sedan', 'red', 2010), ), "This type of car is not what you are looking for.");

    })
    it('check the year', () => {
        assert.throw(() => chooseYourCar.choosingType('Sedan', 'red', 1899), "Invalid Year!");
        assert.throw(() => chooseYourCar.choosingType('Sedan', 'red', 2023), "Invalid Year!");
    });
    it('pick up the car', ()=>{
        assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2020), "This red Sedan meets the requirements, that you have.")
        assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2009), "This Sedan is too old for you, especially with that red color." )
    })
    
     it('brand name ckeck', () =>{
        assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 0), 'b, c');
        assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 1), 'a, c');
        assert.equal(chooseYourCar.brandName(['a', 'b', 'c'], 2), 'a, b');
     })
     it('throw some error from brandName', () =>{
        assert.throw(() => chooseYourCar.brandName('a', 1), "Invalid Information!");
        assert.throw(() => chooseYourCar.brandName(111,1), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName(['a'], -1), "Invalid Information!")
        assert.throw(() => chooseYourCar.brandName(['a'], 9999999999), "Invalid Information!")
     })
     it('carfuel consumption', () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 6), "The car is efficient enough, it burns 6.00 liters/100 km.");
        assert.equal(chooseYourCar.carFuelConsumption(100, 10), "The car burns too much fuel - 10.00 liters!");

     })
     it('validate consumption in liter', () => {
        assert.throw(() => (chooseYourCar.brandName(100, -10)), 'Invalid Information!');
        assert.throw(() => (chooseYourCar.brandName(100, '10')), 'Invalid Information!');
        assert.throw(() => (chooseYourCar.brandName(100, )), 'Invalid Information!');
        assert.throw(() => (chooseYourCar.brandName('100',10 )), 'Invalid Information!');
        
        assert.throw(() => (chooseYourCar.brandName(undefined, 6)), 'Invalid Information!');
        assert.throw(() => (chooseYourCar.brandName([100],10)), 'Invalid Information!');
     })
})