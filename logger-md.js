const chalk = require('chalk');

var Logger = function() {};

Logger.prototype.debug = (message) => {
  if(message) {
    const debug_symbol = chalk.dim;
    const debug_message = chalk.dim;
    console.log(debug_symbol(`[*] `) + debug_message(`${message}`));
  }
}

Logger.prototype.info = (message) => {
  if(message) {
    const info_symbol = chalk.rgb(135,206,235);
    const info_message = chalk.white;
    console.log(info_symbol(`[*] `) + info_message(`${message}`));
  }
}

Logger.prototype.success = (message) => {
  if(message) {
    const success_symbol = chalk.green;
    const success_message = chalk.green;
    console.log(success_symbol(`[+] `) + success_message(`${message}`));
  }
}

Logger.prototype.warning = (message) => {
  if(message) {
    const warning_symbol = chalk.rgb(255,140,0);
    const warning_message = chalk.rgb(255,140,0);
    console.log(warning_symbol(`[!] `) + warning_message(`${message}`));
  }
}

Logger.prototype.error = (message) => {
  if(message) {
    const error_symbol = chalk.red;
    const error_message = chalk.red;
    console.log(error_symbol(`[-] `) + error_message(`${message}`));
  }
}

module.exports = new Logger();