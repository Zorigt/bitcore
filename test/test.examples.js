'use strict';

var chai = chai || require('chai');
var should = chai.should();
var mute = require('./mute').mute;
var unmute = require('./mute').unmute;

var examples = [
  'Address',
  'PeerManager',
  'Rpc',
  'SendTx',
  'Script',
];

describe('Examples', function() {
  before(mute);
  after(unmute);
  examples.forEach(function(example) {
    it('valid '+example, function() {
      var ex = require('../examples/'+example);
      ex.run.should.not.throw();
    });
  });
});