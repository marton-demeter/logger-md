const log = require('../logger-md.js');

console.log('\n\n\n\n\n');
for(var i = 0; i < 5; i++) {
  log.debug('This is a debug message');
  log.info('This is an info message');
  log.success('This is a success message');
  log.warning('This is a warning message');
  log.error('This is an error message');
}
console.log('\n\n\n\n\n');