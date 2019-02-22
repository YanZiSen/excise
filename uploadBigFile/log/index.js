const winston = require('winston')
const format = winston.format
const moment = require('moment')
const { combine, timestamp, label, printf ,colorize, json} = format
const myFormat = printf(info => {
    console.log(info.timestamp)
    console.log(moment(info.timestamp).format('YYYY/MM/DD hh:mm:ss'))
    return `${moment(info.timestamp).format('YYYY/MM/DD hh:mm:ss')} [${info.label}] ${info.level} :  ${info.message}`;
})
/*level is mean equal or less than will output*/
const logger = winston.createLogger({
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        colorize(),
        // json(),
        myFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `${__dirname}/main.log`,
            // exitOnError: false,
            level: 'info'
        })
    ]
})
module.exports = logger