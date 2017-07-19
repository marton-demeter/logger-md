const chai = require('chai');
const sinon = require('sinon');
const styles = require('ansi-styles')
const logger = require('../logger-md.js');

describe('Testing Logger...',function() {
  let spy = undefined;
  beforeEach(function() {
    spy_log = sinon.spy(console, 'log');
    spy_error = sinon.spy(console, 'error');
  });
  
  it('Debug passed.', function() {
    var message = 'This is a debug message...';
    logger.debug(message);
    chai.expect( console.log.calledOnce ).to.be.true;
  });

  
  it('Info passed.', function() {
    var message = 'This is an info message...';
    logger.info(message);
    chai.expect( console.log.calledOnce ).to.be.true;
  });

  
  it('Success passed.', function() {
    var message = 'This is a success message...';
    logger.success(message);
    chai.expect( console.log.calledOnce ).to.be.true;
  });

  
  it('Warning passed.', function() {
    var message = 'This is a warning message...';
    logger.warning(message);
    chai.expect( console.error.calledOnce ).to.be.true;
  });

  
  it('Error passed.', function() {
    var message = 'This is an error message...';
    logger.error(message);
    chai.expect( console.error.calledOnce ).to.be.true;
  });
  
  afterEach(function() {
    spy_log.restore();
    spy_error.restore();
  });
});