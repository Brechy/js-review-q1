const assert = require('chai').assert;
const allFunctions = require('../index');

describe('all tests for your functions',()=>{

  //ADD
  describe('add tests',()=>{
    const addFunc = allFunctions.add;
    it('should add positive numbers',()=>{
      assert.equal(addFunc(1,3),4);
      assert.equal(addFunc(8,2),10);
    });
    it('should add negative numbers',()=>{
      assert.equal(addFunc(-1,-3),-4);
      assert.equal(addFunc(-10,-3),-13);
    });
    it('should output number',()=>{
      assert.isNumber(addFunc(5,5));
    });
  })

  //SUBTRACT
  describe('subtract tests',()=>{
    const subFunc = allFunctions.subtract;

    it('should subtract positive numbers',()=>{
      assert.equal(subFunc(1,3),-2);
      assert.equal(subFunc(100,87),13);
    })
    it('should subtract negative numbers',()=>{
      assert.equal(subFunc(-1,-3),2)
      assert.equal(subFunc(-39,-11),-28)
    })
    it('should output number',()=>{
      assert.isNumber(subFunc(8,1));
    });
  })

  //CALCULATE SUM
  describe('sum array', ()=>{
  const calculateSumFunc = allFunctions.calculateSum;
    it('should output the sum of an array', ()=>{
      assert.equal(calculateSumFunc([1,2,3]), 6);
      assert.equal(calculateSumFunc([-1,-2,-3]), -6);
    })
    it('should output a number', ()=>{
      assert.isNumber(calculateSumFunc([3,6,9]));
    })
 });

})
