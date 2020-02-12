const assert = require('assert');
const categPeople = require('../hw_trytest.js');

describe('check ages categories', () => {
    it('should return correct category for infant', () => {
        assert.equal(categPeople(0.4), 'You are infant');
    });
    it('should return correct category for toddler', () => {
        assert.equal(categPeople(2), 'You are toddler');
    });
    it('should return correct category for child', () => {
        assert.equal(categPeople(9), 'You are child');
    });
    it('should return correct category for adolescent', () => {
        assert.equal(categPeople(15), 'You are adolescent');
    });
    it('should return correct category for adult', () => {
        assert.equal(categPeople(65), 'You are adult');
    });
    it('should return correct category for senior', () => {
        assert.equal(categPeople(70), 'You are senior');
    });
    it('should return correct category for centenarian', () => {
        assert.equal(categPeople(116), 'Congrats, you are centenarian!');
    });
});