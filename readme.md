## Description

A simple, lightweight, customizable cli logger that writes to stdout and stderr.

It has 5 different message levels:

  * debug (stdout)
  * info (stdout)
  * success (stdout)
  * warning (stderr)
  * error (stderr)

## Installation

###### Local

```[sudo] npm install --save logger-md```

###### Global

```[sudo] npm install --global logger-md```

## Usage

```javascript
  const log = require('logger-md');
  
  log.debug(`This is a debug message`);
  log.info(`This is an info message`);
  log.success(`This is a success message`);
  log.warning(`This is a warning message`);
  log.error(`This is an error message`);
  
```

## Customization / API

### Colors

###### Enable / Disable

log.color.enable()<br>
log.color.disable()

###### All

log.color.token(color)<br>
log.color.level(color)<br>
log.color.message(color)

###### Specific

log.debug.color.token(color)<br>
log.debug.color.level(color)<br>
log.debug.color.message(color)

log.info.color.token(color)<br>
log.info.color.level(color)<br>
log.info.color.message(color)

log.success.color.token(color)<br>
log.success.color.level(color)<br>
log.success.color.message(color)

log.warning.color.token(color)<br>
log.warning.color.level(color)<br>
log.warning.color.message(color)

log.error.color.token(color)<br>
log.error.color.level(color)<br>
log.error.color.message(color)

### Characters

###### Enable / Disable

log.token.disable()<br>
log.level.disable()

###### All

log.set.token(token)<br>
log.set.level(level)

###### Specific

log.debug.token(token)<br>
log.debug.level(level)

log.info.token(token)<br>
log.info.level(level)

log.success.token(token)<br>
log.success.level(level)

log.warning.token(token)<br>
log.warning.level(level)

log.error.token(token)<br>
log.error.level(level)

### Alignment

log.align.token(align)<br>
log.align.level(align)

### Save / load state

log.save(preset)<br>
log.load(preset)

### Format

log.format(format)

###### Tokens

:tkn<br>
:padtkn<br>
:lvl<br>
:padlvl<br>
:msg

### Log level

log.level(level)

###### Levels

log.enum.debug<br>
log.enum.info<br>
log.enum.success<br>
log.enum.warning<br>
log.enum.error

