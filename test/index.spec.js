const assert = require('assert');
let a = 10;

it('should variable a equals 10', () => {
    assert.equal(a,10);
});
it('should variable a not equals 0', () => {
    assert.notEqual(a,0);
});

// function sum(a, b){
//     return a + b;
// }
const {sum, mult} = require('../index.js');

describe('function sum', () => {
    it('should return correct sum', () => {
        assert.equal(sum(2,4), 6);
    });
    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2,4), 0);
    });
});
it('should return correct multiplication', () => {
    assert.equal(mult(2,4), 8);
});