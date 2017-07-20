# Description

A simple, lightweight, customizable cli logger that writes to stdout and stderr.

It has 5 different message levels:

  * debug (stdout)
  * info (stdout)
  * success (stdout)
  * warning (stderr)
  * error (stderr)

# Installation

### Local

```npm install --save logger-md```

### Global

```[sudo] npm install --global logger-md```

# Usage

```javascript
  const log = require('logger-md');
  
  log.debug(`This is a debug message`);
  log.info(`This is an info message`);
  log.success(`This is a success message`);
  log.warning(`This is a warning message`);
  log.error(`This is an error message`);
  
```

<img src="./images/logger-md-demo.png" width=210 height=79>

# Customization

Note: The functions that take a color argument need to be given a hex color value.

```javascript
  const log = require('logger-md');
  
  log.info.update.symbol('[INFO]\t');
  log.info.update.symbol.color('#00ff00');
  log.info.update.message.color('#999999');
  
  log.info('This is an info message');
  
  log.info.reset();
  
  log.info('This is another info message');
```

<img src="./images/logger-md-customization.png" width=233 height=37>

# Convenience Functions

## log.reset()

Resets symbols, message and symbol colors, and log level to their default values.

<img src="./images/logger-md-preset-1.png" width=233 height=80>

## log.preset_#()

Shortcut to accessing some preset styles.

#### log.preset_1() [default]

<img src="./images/logger-md-preset-1.png" width=240 height=80>

#### log.preset_2()

<img src="./images/logger-md-preset-2.png" width=240 height=80>

#### log.preset_3()

<img src="./images/logger-md-preset-3.png" width=265 height=75>

#### log.preset_4()

<img src="./images/logger-md-preset-4.png" width=270 height=80>

## log.update.message.color(color)

Sets the same message color for ALL message levels.

```javascript
  log.update.message.color('#0000ff');
```

<img src="./images/logger-md-message-color.png" width=240 height=80>

## log.update.symbol(symbol)

Sets the same symbol for ALL message levels.

```javascript
  log.update.symbol('SYMBOL ');
```

<img src="./images/logger-md-symbol.png" width=260 height=80>

## log.update.symbol.color(color)

Sets the same symbol color for ALL message levels.

```javascript
  log.update.symbol.color('#0000ff');
```

<img src="./images/logger-md-symbol-color.png" width=240 height=80>

## log.update.level(level)

Displays all messages above the set log level. The levels start from DEBUG(0) and go up to ERROR(5). The enums for the level can be accessed with:

  - log.DEBUG
  - log.INFO
  - log.SUCCESS
  - log.WARNING
  - log.ERROR
  
```javascript
  log.update.level(log.WARNING);
```

<img src="./images/logger-md-level.png" width=240 height=50>

# License

[ISC](https://spdx.org/licenses/ISC)