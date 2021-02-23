"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const fs = require("fs");
class CustomLogger {
    constructor() {
        this.logger = winston_1.createLogger({
            level: 'info',
            format: winston_1.format.combine(winston_1.format.label({ label: 'gep-dev-node-api' }), winston_1.format.colorize(), winston_1.format.json(), winston_1.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }), winston_1.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)),
            transports: [
                new winston_1.transports.Console({ level: 'debug' }),
                new DailyRotateFile({
                    filename: `log/flow-%DATE%.log`,
                    datePattern: 'YYYY-MM-DD'
                })
            ]
        });
    }
    showLogger(level, log) {
        const logDir = 'log';
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }
        if (level === 'info') {
            return this.logger.info(log);
        }
        else if (level === 'error') {
            return this.logger.error(log);
        }
        else if (level === 'warn') {
            return this.logger.warn(log);
        }
        else if (level === 'silly') {
            return this.logger.silly(log);
        }
        else if (level === 'debug') {
            return this.logger.debug(log);
        }
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=Logger.js.map