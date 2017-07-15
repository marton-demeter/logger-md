const chai = require('chai');
const sinon = require('sinon');
const chalk = require('chalk');
const logger = require('../logger-md.js');

describe('Testing Logger...',function() {
  let spy = undefined;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });
  
  it('Debug passed.', function() {
    var message = 'This is a debug message...';
    const debug_symbol = chalk.dim;
    const debug_message = chalk.dim;
    logger.debug(message);
    chai.expect( console.log.calledOnce ).to.be.true;
    chai.expect( console.log.calledWith(debug_symbol('[*] ') + debug_message(message)) ).to.be.true;
  });

  
  it('Info passed.', function() {
    var message = 'This is an info message...';
    const info_symbol = chalk.rgb(135,206,235);
    const info_message = chalk.white;
    logger.info(message);
    chai.expect( console.log.calledOnce ).to.be.true;
    chai.expect( console.log.calledWith(info_symbol('[*] ') + info_message(message)) ).to.be.true;
  });

  
  it('Success passed.', function() {
    var message = 'This is a success message...';
    const success_symbol = chalk.green;
    const success_message = chalk.green;
    logger.success(message);
    chai.expect( console.log.calledOnce ).to.be.true;
    chai.expect( console.log.calledWith(success_symbol('[+] ') + success_message(message)) ).to.be.true;
  });

  
  it('Warning passed.', function() {
    var message = 'This is a warning message...';
    const warning_symbol = chalk.rgb(255,140,0);
    const warning_message = chalk.rgb(255,140,0);
    logger.warning(message);
    chai.expect( console.log.calledOnce ).to.be.true;
    chai.expect( console.log.calledWith(warning_symbol('[!] ') + warning_message(message)) ).to.be.true;
  });

  
  it('Error passed.', function() {
    var message = 'This is an error message...';
    const error_symbol = chalk.red;
    const error_message = chalk.red;
    logger.error(message);
    chai.expect( console.log.calledOnce ).to.be.true;
    chai.expect( console.log.calledWith(error_symbol('[-] ') + error_message(message)) ).to.be.true;
  });
  
  afterEach(function() {
    spy.restore();
  });
});