## Description

A simple cli logger that writes to stdout and stderr.

It has 5 different message levels:

  * debug (stdout)
  * info (stdout)
  * success (stdout)
  * warning (stderr)
  * error (stderr)

## Installation

```npm install --save logger-md```

## Usage

```javascript
  const log = require('logger-md');
  
  log.debug(`This is a debug message`);
  log.info(`This is an info message`);
  log.success(`This is a success message`);
  log.warning(`This is a warning message`);
  log.error(`This is an error message`);
  
```

<img src="./images/logger-md-demo.png" width=210 height=79>

## Customization

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


## License

[ISC](https://spdx.org/licenses/ISC)