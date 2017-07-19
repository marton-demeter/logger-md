const styles = require('ansi-styles');

var Logger = function() {};

const debug_symbol_symbol_default = '[*] ';
const debug_symbol_color_default = '#787878';
const debug_message_color_default = '#787878';
const info_symbol_symbol_default = '[*] ';
const info_symbol_color_default = '#88ccff';
const info_message_color_default = '#ffffff';
const success_symbol_symbol_default = '[+] ';
const success_symbol_color_default = '#00ff00';
const success_message_color_default = '#00ff00';
const warning_symbol_symbol_default = '[!] ';
const warning_symbol_color_default = '#ff8800';
const warning_message_color_default = '#ff8800';
const error_symbol_symbol_default = '[-] ';
const error_symbol_color_default = '#ff0000';
const error_message_color_default = '#ff0000';

Logger.prototype.debug = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex(Logger.prototype.debug.symbol.color) +
      Logger.prototype.debug.symbol.symbol +
      styles.color.close +
      styles.color.ansi256.hex(Logger.prototype.debug.message.color) +
      `${message}` +
      styles.color.close
    );
  }
}
Logger.prototype.debug.symbol = () => {};
Logger.prototype.debug.symbol.symbol = String();
Logger.prototype.debug.symbol.color = String();
Logger.prototype.debug.message = () => {};
Logger.prototype.debug.message.color = String();
Logger.prototype.debug.update = () => {};
Logger.prototype.debug.update.symbol = (symbol) => {
  Logger.prototype.debug.symbol.symbol = symbol;
};
Logger.prototype.debug.update.symbol.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.debug.symbol.color = color;
};
Logger.prototype.debug.update.message = () => {};
Logger.prototype.debug.update.message.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.debug.message.color = color;
};
Logger.prototype.debug.reset = () => {
  Logger.prototype.debug.symbol.symbol = debug_symbol_symbol_default;
  Logger.prototype.debug.symbol.color = debug_symbol_color_default;
  Logger.prototype.debug.message.color = debug_message_color_default;
};
Logger.prototype.debug.reset.symbol = () => {
  Logger.prototype.debug.symbol.symbol = debug_symbol_symbol_default;
  Logger.prototype.debug.symbol.color = debug_symbol_color_default;
};
Logger.prototype.debug.reset.symbol.symbol = () => {
  Logger.prototype.debug.symbol.symbol = debug_symbol_symbol_default;
};
Logger.prototype.debug.reset.symbol.color = () => {
  Logger.prototype.debug.symbol.color = debug_symbol_color_default;
};
Logger.prototype.debug.reset.message = () => {};
Logger.prototype.debug.reset.message.color = () => {
  Logger.prototype.debug.message.color = debug_message_color_default;
}

Logger.prototype.info = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex(Logger.prototype.info.symbol.color) +
      Logger.prototype.info.symbol.symbol +
      styles.color.close +
      styles.color.ansi256.hex(Logger.prototype.info.message.color) +
      `${message}` +
      styles.color.close
    );
  }
}
Logger.prototype.info.symbol = () => {};
Logger.prototype.info.symbol.symbol = String();
Logger.prototype.info.symbol.color = String();
Logger.prototype.info.message = () => {};
Logger.prototype.info.message.color = String();
Logger.prototype.info.update = () => {};
Logger.prototype.info.update.symbol = (symbol) => {
  Logger.prototype.info.symbol.symbol = symbol;
};
Logger.prototype.info.update.symbol.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.info.symbol.color = color;
};
Logger.prototype.info.update.message = () => {};
Logger.prototype.info.update.message.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.info.message.color = color;
};
Logger.prototype.info.reset = () => {
  Logger.prototype.info.symbol.symbol = info_symbol_symbol_default;
  Logger.prototype.info.symbol.color = info_symbol_color_default;
  Logger.prototype.info.message.color = info_message_color_default;
};
Logger.prototype.info.reset.symbol = () => {
  Logger.prototype.info.symbol.symbol = info_symbol_symbol_default;
  Logger.prototype.info.symbol.color = info_symbol_color_default;
};
Logger.prototype.info.reset.symbol.symbol = () => {
  Logger.prototype.info.symbol.symbol = info_symbol_symbol_default;
};
Logger.prototype.info.reset.symbol.color = () => {
  Logger.prototype.info.symbol.color = info_symbol_color_default;
};
Logger.prototype.info.reset.message = () => {};
Logger.prototype.info.reset.message.color = () => {
  Logger.prototype.info.message.color = info_message_color_default;
}

Logger.prototype.success = (message) => {
  if(message) {
    console.log(
      styles.color.ansi256.hex(Logger.prototype.success.symbol.color) +
      Logger.prototype.success.symbol.symbol +
      styles.color.close +
      styles.color.ansi256.hex(Logger.prototype.success.message.color) +
      `${message}` +
      styles.color.close
    );
  }
}
Logger.prototype.success.symbol = () => {};
Logger.prototype.success.symbol.symbol = String();
Logger.prototype.success.symbol.color = String();
Logger.prototype.success.message = () => {};
Logger.prototype.success.message.color = String();
Logger.prototype.success.update = () => {};
Logger.prototype.success.update.symbol = (symbol) => {
  Logger.prototype.success.symbol.symbol = symbol;
};
Logger.prototype.success.update.symbol.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.success.symbol.color = color;
};
Logger.prototype.success.update.message = () => {};
Logger.prototype.success.update.message.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.success.message.color = color;
};
Logger.prototype.success.reset = () => {
  Logger.prototype.success.symbol.symbol = success_symbol_symbol_default;
  Logger.prototype.success.symbol.color = success_symbol_color_default;
  Logger.prototype.success.message.color = success_message_color_default;
};
Logger.prototype.success.reset.symbol = () => {
  Logger.prototype.success.symbol.symbol = success_symbol_symbol_default;
  Logger.prototype.success.symbol.color = success_symbol_color_default;
};
Logger.prototype.success.reset.symbol.symbol = () => {
  Logger.prototype.success.symbol.symbol = success_symbol_symbol_default;
};
Logger.prototype.success.reset.symbol.color = () => {
  Logger.prototype.success.symbol.color = success_symbol_color_default;
};
Logger.prototype.success.reset.message = () => {};
Logger.prototype.success.reset.message.color = () => {
  Logger.prototype.success.message.color = success_message_color_default;
}

Logger.prototype.warning = (message) => {
  if(message) {
    console.error(
      styles.color.ansi256.hex(Logger.prototype.warning.symbol.color) +
      Logger.prototype.warning.symbol.symbol +
      styles.color.close +
      styles.color.ansi256.hex(Logger.prototype.warning.message.color) +
      `${message}` +
      styles.color.close
    );
  }
}
Logger.prototype.warning.symbol = () => {};
Logger.prototype.warning.symbol.symbol = String();
Logger.prototype.warning.symbol.color = String();
Logger.prototype.warning.message = () => {};
Logger.prototype.warning.message.color = String();
Logger.prototype.warning.update = () => {};
Logger.prototype.warning.update.symbol = (symbol) => {
  Logger.prototype.warning.symbol.symbol = symbol;
};
Logger.prototype.warning.update.symbol.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.warning.symbol.color = color;
};
Logger.prototype.warning.update.message = () => {};
Logger.prototype.warning.update.message.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
      Logger.prototype.warning.message.color = color;
};
Logger.prototype.warning.reset = () => {
  Logger.prototype.warning.symbol.symbol = warning_symbol_symbol_default;
  Logger.prototype.warning.symbol.color = warning_symbol_color_default;
  Logger.prototype.warning.message.color = warning_message_color_default;
};
Logger.prototype.warning.reset.symbol = () => {
  Logger.prototype.warning.symbol.symbol = warning_symbol_symbol_default;
  Logger.prototype.warning.symbol.color = warning_symbol_color_default;
};
Logger.prototype.warning.reset.symbol.symbol = () => {
  Logger.prototype.warning.symbol.symbol = warning_symbol_symbol_default;
};
Logger.prototype.warning.reset.symbol.color = () => {
  Logger.prototype.warning.symbol.color = warning_symbol_color_default;
};
Logger.prototype.warning.reset.message = () => {};
Logger.prototype.warning.reset.message.color = () => {
  Logger.prototype.warning.message.color = warning_message_color_default;
}

Logger.prototype.error = (message) => {
  if(message) {
    console.error(
      styles.color.ansi256.hex(Logger.prototype.error.symbol.color) +
      Logger.prototype.error.symbol.symbol +
      styles.color.close +
      styles.color.ansi256.hex(Logger.prototype.error.message.color) +
      `${message}` +
      styles.color.close
    );
  }
}
Logger.prototype.error.symbol = () => {};
Logger.prototype.error.symbol.symbol = String();
Logger.prototype.error.symbol.color = String();
Logger.prototype.error.message = () => {};
Logger.prototype.error.message.color = String();
Logger.prototype.error.update = () => {};
Logger.prototype.error.update.symbol = (symbol) => {
  Logger.prototype.error.symbol.symbol = symbol;
};
Logger.prototype.error.update.symbol.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
    Logger.prototype.error.symbol.color = color;
};
Logger.prototype.error.update.message = () => {};
Logger.prototype.error.update.message.color = (color) => {
  var c = Logger.prototype.isHex(color);
  if(c)
    Logger.prototype.error.message.color = color;
};
Logger.prototype.error.reset = () => {
  Logger.prototype.error.symbol.symbol = error_symbol_symbol_default;
  Logger.prototype.error.symbol.color = error_symbol_color_default;
  Logger.prototype.error.message.color = error_message_color_default;
};
Logger.prototype.error.reset.symbol = () => {
  Logger.prototype.error.symbol.symbol = error_symbol_symbol_default;
  Logger.prototype.error.symbol.color = error_symbol_color_default;
};
Logger.prototype.error.reset.symbol.symbol = () => {
  Logger.prototype.error.symbol.symbol = error_symbol_symbol_default;
};
Logger.prototype.error.reset.symbol.color = () => {
  Logger.prototype.error.symbol.color = error_symbol_color_default;
};
Logger.prototype.error.reset.message = () => {};
Logger.prototype.error.reset.message.color = () => {
  Logger.prototype.error.message.color = error_message_color_default;
}

Logger.prototype.isHex = (value) => {
  value.slice(0,1) === '#' ? value = value.slice(1) : value;
  if(value.length != 6 && value.length != 3) return false;
  var final = parseInt(value,16).toString(16);
  var ret = final;
  if(final.length != 6 || final.length != 3)
    for(let i = 0; i < value.length - final.length; ++i)
      ret = '0' + ret;
  if(ret === value.toLowerCase()) return '#'+ret;
  else return false;
}

Logger.prototype.update = () => {};
Logger.prototype.update.message = () => {};
Logger.prototype.update.message.color = (color) => { 
  Logger.prototype.debug.update.message.color(color);
  Logger.prototype.info.update.message.color(color);
  Logger.prototype.success.update.message.color(color);
  Logger.prototype.warning.update.message.color(color);
  Logger.prototype.error.update.message.color(color);
}
Logger.prototype.update.symbol = (symbol) => {
  Logger.prototype.debug.update.symbol(symbol);
  Logger.prototype.info.update.symbol(symbol);
  Logger.prototype.success.update.symbol(symbol);
  Logger.prototype.warning.update.symbol(symbol);
  Logger.prototype.error.update.symbol(symbol);
}
Logger.prototype.update.symbol.color = (color) => {
  Logger.prototype.debug.update.symbol.color(color);
  Logger.prototype.info.update.symbol.color(color);
  Logger.prototype.success.update.symbol.color(color);
  Logger.prototype.warning.update.symbol.color(color);
  Logger.prototype.error.update.symbol.color(color);
}

Logger.prototype.preset_1 = () => {
  Logger.prototype.debug.reset();
  Logger.prototype.info.reset();
  Logger.prototype.success.reset();
  Logger.prototype.warning.reset();
  Logger.prototype.error.reset();
};
Logger.prototype.reset = () => { Logger.prototype.preset_1() }

Logger.prototype.preset_2 = () => {
  Logger.prototype.update.message.color('ddd');
};

Logger.prototype.preset_3 = () => {
  Logger.prototype.debug.update.symbol('DEBUG\t');
  Logger.prototype.info.update.symbol('INFO\t');
  Logger.prototype.success.update.symbol('SUCCESS\t');
  Logger.prototype.warning.update.symbol('WARNING\t');
  Logger.prototype.error.update.symbol('ERROR\t');
};

Logger.prototype.preset_4 = () => {
  Logger.prototype.debug.update.symbol('DEBUG\t');
  Logger.prototype.info.update.symbol('INFO\t');
  Logger.prototype.success.update.symbol('SUCCESS\t');
  Logger.prototype.warning.update.symbol('WARNING\t');
  Logger.prototype.error.update.symbol('ERROR\t');
  Logger.prototype.update.message.color('ddd');
}

const logger = new Logger();

logger.reset();

module.exports = logger;
