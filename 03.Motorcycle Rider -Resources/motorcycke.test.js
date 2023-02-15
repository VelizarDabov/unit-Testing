const motorcycleRider = require("./Motorcycle Rider");
const assert = require("chai").assert;

describe("Motorcycle Rider", function () {
  it("check the type of category", () => {
    assert.equal(
      motorcycleRider.licenseRestriction("AM", "AM"),
      "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A1", "A1"),
      "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A2", "A2"),
      "Motorcycles with maximum power of 35KW. and the minimum age is 18."
    );
    assert.equal(
      motorcycleRider.licenseRestriction("A", "A"),
      "No motorcycle restrictions, and the minimum age is 24."
    );
  });
  it("throw error different type license", () => {
    assert.throw(
      () => motorcycleRider.licenseRestriction(["AM", "A", "A1", "A2"], "a"),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.licenseRestriction(["AM", "A", "A1", "A2"], "a1"),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.licenseRestriction(["AM", "A", "A1", "A2"], "am"),
      "Invalid Information!"
    );
  });
  it("store engine volume of motorcycles", () => {
    assert.equal(
      motorcycleRider.motorcycleShowroom(["50", "125", "250", "600"], 125),
      "There are 2 available motorcycles matching your criteria!"
    );
    assert.equal(
      motorcycleRider.motorcycleShowroom(["50", "125", "250", "600"], 600),
      "There are 4 available motorcycles matching your criteria!"
    );
  });
  it("validate input", () => {
    assert.throw(
      () => motorcycleRider.motorcycleShowroom("125, 600", 125),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.motorcycleShowroom(125, 125),
      "Invalid Information!"
    );
    assert.throw(
      () =>
        motorcycleRider.motorcycleShowroom(["50", "125", "250", "600"], "125"),
      "Invalid Information!"
    );
    assert.throw(
      () =>
        motorcycleRider.motorcycleShowroom(["50", "125", "250", "600"], "asd"),
      "Invalid Information!"
    );
  });
  it("other spendings", () => {
    assert.equal(
      motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false),
      "You spend $270.00 for equipment and consumables!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        false
      ),
      "You spend $600.00 for equipment and consumables!"
    );
    assert.equal(
      motorcycleRider.otherSpendings(
        ["helmet", "jacked"],
        ["engine oil", "oil filter"],
        true
      ),
      "You spend $540.00 for equipment and consumables with 10% discount!"
    );
  });
  it("validate spendings input", () => {
    assert.throw(
      () => motorcycleRider.otherSpendings("helmet", ["engine oil"], false),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.otherSpendings(["helmet"], "engine oil", false),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.otherSpendings("helmet", "engine oil", false),
      "Invalid Information!"
    );
    assert.throw(
      () => motorcycleRider.otherSpendings("helmet", ["engine oil"], false),
      "Invalid Information!"
    );
    assert.throw(
      () =>
        motorcycleRider.otherSpendings(["helmet"], ["engine oil"], undefined),
      "Invalid Information!"
    );
    assert.throw(() => motorcycleRider.otherSpendings('helmet', ['engine oil'], ), 'Invalid Information!')
  });
});
