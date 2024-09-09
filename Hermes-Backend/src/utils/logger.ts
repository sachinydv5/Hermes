import winston from "winston"


const winstonConfig = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.json(),
  ),
  exitOnError: false,
  defaultMeta: { hostName: 'themis-lsp', HOSTNAME: process.env.HOSTNAME || 'HOSTNAME_NOT_FOUND' },
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      level: 'info',
    }),
    new winston.transports.File({
      handleExceptions: true,
      filename: 'combined.log'
    }),
  ],
});

let messageNumber = 0;

export const log = {
  info: (message: string, params: any = {}) =>
    winstonConfig.log({
      level: 'info',
      messageNumber: ++messageNumber,
      message: message,
      ...params
    }),
  error: (message: string, params: any = {}) =>
    winstonConfig.log({
      level: 'error',
      messageNumber: ++messageNumber,
      message: message,
      ...params
    }),
  warn: (message: string, params: any = {}) =>
    winstonConfig.log({
      level: 'warn',
      messageNumber: ++messageNumber,
      message: message,
      ...params
    }),
}
