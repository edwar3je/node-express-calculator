const Calculate = require('./calculate');

let calculate1;
let calculate2;

beforeEach(function (){
    calculate1 = new Calculate([1,2,3,4,5]);
    calculate2 = new Calculate([5,5,10,15]);
    calculate3 = new Calculate([-1,-2,-3,-4,-5]);
});

describe('Average should return the sum of all numbers in the array divided by the length', function() {
    test('Average should work with a consistent set of numbers', function() {
        expect(calculate1.mean()).toEqual(3)
    });
    test('Average should work with an inconsistent set of numbers', function() {
        expect(calculate2.mean()).toEqual(8.75)
    });
    test('Average should work with a negative set of numbers', function() {
        expect(calculate3.mean()).toEqual(-3)
    })
});

describe('Median should return the middle value for an odd set of numbers or the two middle values averaged for an even set of numbers', function() {
    test('Median should display the middle value of an odd set of numbers', function() {
        expect(calculate1.median()).toEqual(3)
    });
    test('Median should return the average of the two middle values for an even set of numbers', function() {
        expect(calculate2.median()).toEqual(7.5)
    });
    test('Median should display the middle value of an odd set of negative numbers', function() {
        expect(calculate3.median()).toEqual(-3)
    })
});

describe('Mode should return an array of the most frequent numbers in a set of numbers', function() {
    test('Mode should return an array of all the numbers if every number has the same frequency', function() {
        expect(calculate1.mode()).toEqual([1,2,3,4,5])
    });
    test('Mode should return an array consisting of just the most frequent number(s) in a set of numbers', function() {
        expect(calculate2.mode()).toEqual([5])
    });
    test('Mode should return an array of the most frequent numbers in a set of negative numbers', function() {
        expect(calculate3.mode()).toEqual([-1,-2,-3,-4,-5])
    })
});