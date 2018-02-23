/* log level
    error  : 0, 
    warn   : 1, 
    info   : 2, 
    verbose: 3, 
    debug  : 4, 
    silly  : 5 
 */
var winston = require('winston');
var getenv = require('getenv');
var dotenv = require('dotenv');
require('winston-daily-rotate-file');
var path = require('path');
winston.emitErrs = true;

dotenv.config();

const level = process.env.LOG_LEVEL || 'debug';

                       
var logger = new winston.Logger({
    transports: [
        new winston.transports.DailyRotateFile({
            name: 'DailyRotateFile',
            level: 'error',
            filename: './logs/log',
            datePattern: 'yyyy-MM-dd.',
            prepend: true
        }),
        new winston.transports.Console({
            name:'Console',
            level: 'silly',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

//turn off all log level
logger.transports['Console'].silent = getenv.bool('IS_LOG_SILENT');// turns off

module.exports = logger;