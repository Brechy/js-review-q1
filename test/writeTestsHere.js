const { assert } = require('chai');
const allFunctions = require('../index');

describe('all tests for your functions', () => {
	// ADD
	describe('add tests', () => {
		const addFunc = allFunctions.add;
		it('should add positive numbers', () => {
			assert.equal(addFunc(1, 3), 4);
			assert.equal(addFunc(8, 2), 10);
		});
		it('should add negative numbers', () => {
			assert.equal(addFunc(-1, -3), -4);
			assert.equal(addFunc(-10, -3), -13);
		});
		it('should output number', () => {
			assert.isNumber(addFunc(5, 5));
		});
	});

	// SUBTRACT
	describe('subtract tests', () => {
		const subFunc = allFunctions.subtract;

		it('should subtract positive numbers', () => {
			assert.equal(subFunc(1, 3), -2);
			assert.equal(subFunc(100, 87), 13);
		});
		it('should subtract negative numbers', () => {
			assert.equal(subFunc(-1, -3), 2);
			assert.equal(subFunc(-39, -11), -28);
		});
		it('should output number', () => {
			assert.isNumber(subFunc(8, 1));
		});
	});

	// CALCULATE SUM
	describe('sum array tests', () => {
		const calculateSumFunc = allFunctions.calculateSum;
		it('should output the sum of an array', () => {
			assert.equal(calculateSumFunc([1, 2, 3]), 6);
			assert.equal(calculateSumFunc([-1, -2, -3]), -6);
		});
		it('should output a number', () => {
			assert.isNumber(calculateSumFunc([3, 6, 9]));
		});
	});

	// MAP function
	// Should muliply each element in an array by num
	describe('map array tests', () => {
		const mapFunc = allFunctions.map;
		it('should multiply each element in the array by value passed in', () => {
			assert.isArray(mapFunc([1, 2, 3], n => n * 3));
		});
		it('should multiply by negative values passed in', () => {
			assert.isArray(mapFunc([2, 3, 4], n => n * -2));
		});
		// it('should output a number', () => {
		// 	assert.isNumber(mapFunc([6, 8, 9]));
		// });
	});
	// FILTER function
	describe('filter array tests', () => {
		const filterFunc = allFunctions.filter;
		const isEven = num => num % 2 === 0;
		const isOdd = num => num % 2 !== 0;
		const isNeg = num => Math.sign(num) === -1;
		const isPos = num => Math.sign(num) === 1;

		it('should return only even numbers', () => {
			assert.deepEqual(filterFunc([1, 2, 3, 4, 5, 6], isEven), [2, 4, 6]);
		});
		it('should return only odd numbers', () => {
			assert.deepEqual(filterFunc([1, 2, 3, 4, 5, 6], isOdd), [1, 3, 5]);
		});
		it('should return only negative numbers', () => {
			assert.deepEqual(filterFunc([2, -3, 4, -5, 6], isNeg), [-3, -5]);
		});
		it('should return only positive numbers', () => {
			assert.deepEqual(filterFunc([2, -3, 4, -5, 6], isPos), [2, 4, 6]);
		});
	});
});
