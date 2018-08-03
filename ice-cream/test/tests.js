var assert = require('assert');

var flavour = require('../flavour');

// console.log(flavour.chooseFlavour('maple syrup') === '🍁');
// console.log(flavour.chooseFlavour('matcha') === '🍵');
// console.log('chooseFlavour', flavour.chooseFlavour('hot dog') === '😻');


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

describe('flavour', function() {
  describe('#chooseFlavour()', function() {
    it('should return a maple leaf when we pass in maple syrup', function() {
      assert.equal(flavour.chooseFlavour('maple syrup'), '🍁');
    });

    it('should return a tea when we pass in matcha', function() {
      assert.equal(flavour.chooseFlavour('matcha'), '🍵');
    });

    it('should return a heart cat when we pass in hot dog', function() {
      assert.equal(flavour.chooseFlavour('hot dog'), '😻');
    });

    it('should return a 💔 when we pass in regret', function() {
      assert.equal(flavour.chooseFlavour('regret'), '💔');
    });

    it('should return out of stock when we pass in anything else', function() {
      assert.equal(flavour.chooseFlavour(''), 'out of stock');
      assert.equal(flavour.chooseFlavour({}), 'out of stock');
      assert.equal(flavour.chooseFlavour('a'), 'out of stock');
    });

  });
});