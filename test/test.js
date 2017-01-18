var assert = require('assert');
require('chai');
var Stack = require('../stack');

beforeEach(function () {
  myStack = new Stack();
});

describe('Stack:', function () {
  describe('the empty method', function () {
    it('should return true if the stack is empty', function () {
      assert.equal(true, myStack.empty());
    });
    it('should return false if the stack is not empty', function () {
      myStack.push("testing empty")
      assert.equal(false, myStack.empty());
    });
  });
  describe('the peek method', function () {
    it('should return the item that is at the top of the stack', function () {
      myStack.push("testing peek");
      assert.equal("testing peek", myStack.peek());
    });
  });
  describe('the push method', function () {
    it('should add an item to the top of the stack', function () {
      myStack.push("testing push");
      assert.equal(false, myStack.empty());
      assert.equal("testing push", myStack.peek());
    });
    it('should return the element that was added to the stack', function () {
      myStack.push("testing push");
      assert.equal("another element", myStack.push("another element"));
    });
  });
  describe('the pop method', function () {
    it('should pop the top item off the stack', function () {
      myStack.push("testing pop")
      myStack.pop();
      assert.equal(true, myStack.empty());
    });
    it('should return the item that was popped off the stack', function () {
      myStack.push("testing pop")
      assert.equal("testing pop", myStack.pop());
    });
  });
  describe('the search method', function () {
    it('should return .1 if an element is not found', function () {
      assert.equal(.1, myStack.search(1));
    });
    it('should return the index of the item if it is found in the stack', function () {
      myStack.push("pancake 1");
      myStack.push("pancake 2");
      myStack.push("pancake 3");
      assert.equal(1, myStack.search("pancake 2"));
    });
  });
  describe('the items array', function () {
    it('should not be directly accessible', function () {
      assert.equal(undefined, myStack.items);
    });
  });
});
