var colors = require('colors-md');
const padder = require('pad-md');
const os = require('os');

if(os.platform() === 'darwin') colors = colors.ansi256;
else colors = colors.ansi8;

Logger = function() {}

Logger.prototype = {
  fmt: ':tkn:padtkn :lvl:padlvl :msg',
  enum: {
    debug: 0,
    info: 1,
    success: 2,
    warning: 3,
    error: 4
  },
  tkn: {
    debug: '[*]',
    info: '[*]',
    success: '[+]',
    warning: '[!]',
    error: '[-]'
  },
  lvl: {
    debug: 'DEBUG',
    info: 'INFO',
    success: 'SUCCESS',
    warning: 'WARNING',
    error: 'ERROR'
  },
  aln: {
    tkn: 'left',
    lvl: 'left'
  },
  msg: {
    debug: 'debug',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
  },
  out: console.log,
  clr: {
    tkn: {
      debug: colors.hex('#999'),
      info: colors.hex('#8cf'),
      success: colors.hex('#0f0'),
      warning: colors.hex('#f80'),
      error: colors.hex('#f00'),
    },
    lvl: {
      debug: colors.hex('#999'),
      info: colors.hex('#8cf'),
      success: colors.hex('#0f0'),
      warning: colors.hex('#f80'),
      error: colors.hex('#f00'),
    },
    msg: {
      debug: colors.hex('#eee'),
      info: colors.hex('#eee'),
      success: colors.hex('#eee'),
      warning: colors.hex('#eee'),
      error: colors.hex('#eee'),
    }
  },
  fnl: undefined,
  crt_lvl: undefined,
  log_lvl: 0,
  clr_en: true,
  pad: {
    tkn: 0,
    lvl: 0,
  },
  saved_state: {},
  debug: function(msg) {
    Logger.prototype.crt_lvl = 'debug';
    Logger.prototype.msg[Logger.prototype.crt_lvl] = msg;
    Logger.prototype.replace();
    if(Logger.prototype.log_lvl <= Logger.prototype.enum[Logger.prototype.crt_lvl])
      Logger.prototype.out(Logger.prototype.fnl);
  },
  info: function(msg) {
    Logger.prototype.crt_lvl = 'info';
    Logger.prototype.msg[Logger.prototype.crt_lvl] = msg;
    Logger.prototype.replace();
    if(Logger.prototype.log_lvl <= Logger.prototype.enum[Logger.prototype.crt_lvl])
      Logger.prototype.out(Logger.prototype.fnl);
  },
  success: function(msg) {
    Logger.prototype.crt_lvl = 'success';
    Logger.prototype.msg[Logger.prototype.crt_lvl] = msg;
    Logger.prototype.replace();
    if(Logger.prototype.log_lvl <= Logger.prototype.enum[Logger.prototype.crt_lvl])
      Logger.prototype.out(Logger.prototype.fnl);
  },
  warning: function(msg) {
    Logger.prototype.crt_lvl = 'warning';
    Logger.prototype.msg[Logger.prototype.crt_lvl] = msg;
    Logger.prototype.replace();
    Logger.prototype.out = console.error;
    if(Logger.prototype.log_lvl <= Logger.prototype.enum[Logger.prototype.crt_lvl])
      Logger.prototype.out(Logger.prototype.fnl);
  },
  error: function(msg) {
    Logger.prototype.crt_lvl = 'error';
    Logger.prototype.msg[Logger.prototype.crt_lvl] = msg;
    Logger.prototype.replace();
    Logger.prototype.out = console.error;
    if(Logger.prototype.log_lvl <= Logger.prototype.enum[Logger.prototype.crt_lvl])
      Logger.prototype.out(Logger.prototype.fnl);
  },
  replace: function() {
    var rep_tkn = Logger.prototype.pad.tkn - Logger.prototype.tkn[Logger.prototype.crt_lvl].length;
    if(rep_tkn < 0) rep_tkn = 0;
    var rep_lvl = Logger.prototype.pad.lvl - Logger.prototype.lvl[Logger.prototype.crt_lvl].length;
    if(rep_lvl < 0) rep_lvl = 0;
    Logger.prototype.fnl = Logger.prototype.fmt;
    if(Logger.prototype.clr_en) {
      Logger.prototype.fnl = Logger.prototype.fnl.replace(':tkn', `${Logger.prototype.clr.tkn[Logger.prototype.crt_lvl]}:tkn`);
      Logger.prototype.fnl = Logger.prototype.fnl.replace(':lvl', `${Logger.prototype.clr.lvl[Logger.prototype.crt_lvl]}:lvl`);
      Logger.prototype.fnl = Logger.prototype.fnl.replace(':msg', `${Logger.prototype.clr.msg[Logger.prototype.crt_lvl]}:msg`);
    }
    Logger.prototype.fnl = Logger.prototype.fnl.replace(':tkn', Logger.prototype.tkn[Logger.prototype.crt_lvl]);
    Logger.prototype.fnl = Logger.prototype.fnl.replace(':padtkn', ' '.repeat(rep_tkn));
    Logger.prototype.fnl = Logger.prototype.fnl.replace(':lvl', Logger.prototype.lvl[Logger.prototype.crt_lvl]);
    Logger.prototype.fnl = Logger.prototype.fnl.replace(':padlvl', ' '.repeat(rep_lvl));
    Logger.prototype.fnl = Logger.prototype.fnl.replace(':msg',Logger.prototype.msg[Logger.prototype.crt_lvl]);
  },
  padder: function(what) {
    var max = undefined;
    var val = undefined;
    Object.keys(Logger.prototype[what]).forEach((key) => {
      val = Logger.prototype[what][key].length
      if(max === undefined) max = val;
      else if(max < val) max = val;
      else {};
    });
    if(what === 'tkn') {
      Logger.prototype.pad.tkn = max;
      if(Logger.prototype.aln[what] === 'left') 
        Logger.prototype.fmt = Logger.prototype.fmt.replace(':padtkn:tkn', ':tkn:padtkn');
      if(Logger.prototype.aln[what] === 'right')
        Logger.prototype.fmt = Logger.prototype.fmt.replace(':tkn:padtkn', ':padtkn:tkn');
    }
    if(what === 'lvl') {
      Logger.prototype.pad.lvl = max;
      if(Logger.prototype.aln[what] === 'left') 
        Logger.prototype.fmt = Logger.prototype.fmt.replace(':padlvl:lvl', ':lvl:padlvl');
      if(Logger.prototype.aln[what] === 'right')
        Logger.prototype.fmt = Logger.prototype.fmt.replace(':lvl:padlvl', ':padlvl:lvl');
    }
  },
  align: {},
  set: {},
  level: function(lvl) {
    Logger.prototype.log_lvl = lvl;
  },
  save: function(name) {
    Logger.prototype.saved_state[`${name}`] = {
      fmt: Logger.prototype.fmt,
      tkn: JSON.parse(JSON.stringify(Logger.prototype.tkn)),
      lvl: JSON.parse(JSON.stringify(Logger.prototype.lvl)),
      aln: JSON.parse(JSON.stringify(Logger.prototype.aln)),
      msg: Logger.prototype.msg,
      out: Logger.prototype.out,
      clr: JSON.parse(JSON.stringify(Logger.prototype.clr)),
      fnl: Logger.prototype.fnl,
      crt_lvl: Logger.prototype.crt_lvl,
      log_lvl: Logger.prototype.log_lvl,
      clr_en: Logger.prototype.clr_en,
      pad: JSON.parse(JSON.stringify(Logger.prototype.pad)),
    }
  },
  load: function(name) {
    Logger.prototype.fmt = Logger.prototype.saved_state[`${name}`].fmt;
    Logger.prototype.tkn = JSON.parse(JSON.stringify(Logger.prototype.saved_state[`${name}`].tkn));
    Logger.prototype.lvl = JSON.parse(JSON.stringify(Logger.prototype.saved_state[`${name}`].lvl));
    Logger.prototype.aln = JSON.parse(JSON.stringify(Logger.prototype.saved_state[`${name}`].aln));
    Logger.prototype.msg = Logger.prototype.saved_state[`${name}`].msg;
    Logger.prototype.out = Logger.prototype.saved_state[`${name}`].out;
    Logger.prototype.clr = JSON.parse(JSON.stringify(Logger.prototype.saved_state[`${name}`].clr));
    Logger.prototype.fnl = Logger.prototype.saved_state[`${name}`].fnl;
    Logger.prototype.crt_lvl = Logger.prototype.saved_state[`${name}`].crt_lvl;
    Logger.prototype.log_lvl = Logger.prototype.saved_state[`${name}`].log_lvl;
    Logger.prototype.clr_en = Logger.prototype.saved_state[`${name}`].clr_en;
    Logger.prototype.pad = JSON.parse(JSON.stringify(Logger.prototype.saved_state[`${name}`].pad));
  }
}

Logger.prototype.align.token = function(tkn) {
  Logger.prototype.aln.tkn = tkn;
  Logger.prototype.padder('tkn');
};
Logger.prototype.align.level = function(lvl) {
  Logger.prototype.aln.lvl = lvl;
  Logger.prototype.padder('lvl');
};

Logger.prototype.set.token = function(tkn) {
  Object.keys(Logger.prototype.tkn).forEach((key) => {
    Logger.prototype.tkn[`${key}`] = tkn;
  });
  Logger.prototype.padder('tkn');
};
Logger.prototype.debug.token = function(tkn) {
  Logger.prototype.tkn.debug = tkn;
  Logger.prototype.padder('tkn');
};
Logger.prototype.info.token = function(tkn) {
  Logger.prototype.tkn.info = tkn;
  Logger.prototype.padder('tkn');
};
Logger.prototype.success.token = function(tkn) {
  Logger.prototype.tkn.success = tkn;
  Logger.prototype.padder('tkn');
};
Logger.prototype.warning.token = function(tkn) {
  Logger.prototype.tkn.warning = tkn;
  Logger.prototype.padder('tkn');
};
Logger.prototype.error.token = function(tkn) {
  Logger.prototype.tkn.error = tkn;
  Logger.prototype.padder('tkn');
};

Logger.prototype.level

Logger.prototype.set.level = function(lvl) {
  Object.keys(Logger.prototype.lvl).forEach((key) => {
    Logger.prototype.lvl[`${key}`] = lvl;
  });
  Logger.prototype.padder('lvl');
};
Logger.prototype.debug.level = function(lvl) {
  Logger.prototype.lvl.debug = lvl;
  Logger.prototype.padder('lvl');
};
Logger.prototype.info.level = function(lvl) {
  Logger.prototype.lvl.info = lvl;
  Logger.prototype.padder('lvl');
};
Logger.prototype.success.level = function(lvl) {
  Logger.prototype.lvl.success = lvl;
  Logger.prototype.padder('lvl');
};
Logger.prototype.warning.level = function(lvl) {
  Logger.prototype.lvl.warning = lvl;
  Logger.prototype.padder('lvl');
};
Logger.prototype.error.level = function(lvl) {
  Logger.prototype.lvl.error = lvl;
  Logger.prototype.padder('lvl');
};

Logger.prototype.format = function(fmt) {
  Logger.prototype.fmt = fmt;
};

Logger.prototype.color = {};
Logger.prototype.color.token = function(clr) {
  Object.keys(Logger.prototype.clr.tkn).forEach((color) => {
    Logger.prototype.clr.tkn[`${color}`] = colors.hex(clr);
  });
};
Logger.prototype.color.level = function(clr) {
  Object.keys(Logger.prototype.clr.lvl).forEach((color) => {
    Logger.prototype.clr.lvl[`${color}`] = colors.hex(clr);
  });
};
Logger.prototype.color.message = function(clr) {
  Object.keys(Logger.prototype.clr.msg).forEach((color) => {
    Logger.prototype.clr.msg[`${color}`] = colors.hex(clr);
  });
};

Logger.prototype.color = {};
Logger.prototype.color.enable = function() {
  Logger.prototype.clr_en = true;
};
Logger.prototype.color.disable = function() {
  Logger.prototype.clr_en = false;
};

Logger.prototype.token = {};
Logger.prototype.token.disable = function() {
  Logger.prototype.fmt = Logger.prototype.fmt.replace(' :tkn:padtkn', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(':tkn:padtkn ', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(' :padtkn:tkn', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(':padtkn:tkn ', '');
}
Logger.prototype.level = function(lvl) {
 Logger.prototype.log_lvl = lvl; 
};
Logger.prototype.level.disable = function() {
  Logger.prototype.fmt = Logger.prototype.fmt.replace(' :lvl:padlvl', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(':lvl:padlvl ', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(' :padlvl:lvl', '');
  Logger.prototype.fmt = Logger.prototype.fmt.replace(':padlvl:lvl ', '');
}
  
const logger = new Logger();

logger.format(':lvl:padlvl :msg');
logger.align.level('right');
logger.save(1);

logger.format(':tkn:padtkn :lvl:padlvl :msg');
logger.align.level('right');
logger.align.token('left');
logger.save(2);

module.exports = logger;