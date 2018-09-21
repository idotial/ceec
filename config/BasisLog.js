//@flow
var winston = require('winston')
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/basis-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
});

transport.on('rotate', function(oldFilename, newFilename) {
  console.log('log file switch %s to %s', oldFilename, newFilename);
});

const Basislogger = winston.createLogger({
  // format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.simple()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    transport,
    new winston.transports.File({ filename: 'logs/basis_error.log', level: 'error' }),
  ]
});

module.exports = Basislogger
