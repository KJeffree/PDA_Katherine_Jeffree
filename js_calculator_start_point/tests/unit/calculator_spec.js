var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('adds 1 to 4 to get 5', function(){
    calculator.numberClick(1)
    calculator.operatorClick("+")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 5)
  })

  it('subtracts 4 from 7 to get 3', function(){
    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 3)
  })

  it('multiplies 3 by 5 to get 15', function(){
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 15)
  })

  it('divides 21 by 7 to get 3', function(){
    calculator.numberClick(21)
    calculator.operatorClick("/")
    calculator.numberClick(7)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 3)
  })

  it('concatenates multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(6)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 236)
  })

  it('chains multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick("+")
    calculator.numberClick(6)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("/")
    calculator.numberClick(4)
    calculator.operatorClick("-")
    calculator.numberClick(1)
    calculator.operatorClick("=")
    actual = calculator.previousTotal
    assert.equal(actual, 9)
  })

  it('clears the running total without affecting the calculation', function(){
    calculator.numberClick(4)
    calculator.operatorClick("*")
    calculator.numberClick(5)
    calculator.operatorClick("+")
    calculator.numberClick(6)
    calculator.clearClick()
    actualRunning = calculator.runningTotal
    actualPrevious = calculator.previousTotal
    assert.equal(actualRunning, 0)
    assert.equal(actualPrevious, 20)
  })

});
