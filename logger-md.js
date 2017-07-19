const styles = require('ansi-styles');

var Logger = function() {};

Logger.prototype.debug = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex('#787878') +
      `[*] ${message}` + 
      styles.color.close
    );
  }
}

Logger.prototype.info = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex('#88ccff') +
      `[*] ` +
      styles.color.close +
      styles.color.ansi256.hex('#ffffff') +
      `${message}` +
      styles.color.close
    );
  }
}

Logger.prototype.success = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex('#00ff00') +
      `[+] ${message}` + 
      styles.color.close
    );
  }
}

Logger.prototype.warning = (message) => {
  if(message) {
    console.error(
      styles.color.ansi256.hex('#ff8800') +
      `[+] ${message}` + 
      styles.color.close
    );
  }
}

Logger.prototype.error = (message) => {
  if(message) {
    console.error(
      styles.color.ansi256.hex('#ff0000') +
      `[+] ${message}` + 
      styles.color.close
    );
  }
}

module.exports = new Logger();