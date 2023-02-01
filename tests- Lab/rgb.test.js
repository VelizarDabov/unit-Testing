const { expect } = require("chai");
const rgbToHexColor  = require("../rgbToHex");

describe("regular test", () => {
  it("should return hex color code", () => {
   let red = 139;
   let green = 10;
   let blue = 200;
   let expectedResult = '#8B0AC8';

   let result = rgbToHexColor(red, green, blue)
   expect(result).equal(expectedResult)
  });
  it("should return hex color code for white ", () => {
    let red = 255;
    let green = 255;
    let blue = 255;
    let expectedResult = '#FFFFFF';
 
    let result = rgbToHexColor(red, green, blue)
    expect(result).equal(expectedResult)
   });
   it("should return hex color code for black ", () => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let expectedResult = '#000000';
 
    let result = rgbToHexColor(red, green, blue)
    expect(result).equal(expectedResult)
   });
   it("should return  undefined  when negative color", () => {
    let red = 100;
    let green = 50;
    let blue = -1;
   
 
    let result = rgbToHexColor(red, green, blue)
    expect(result).equal(undefined)
   });
   it("should return  undefined  when bigger range color", () => {
    let red = 100;
    let green = 50;
    let blue = 260;
   
 
    let result = rgbToHexColor(red, green, blue)
    expect(result).equal(undefined)
   });

 
});
