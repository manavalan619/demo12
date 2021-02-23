"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const Routes_1 = require("./routes/Routes");
const mongoose = require("mongoose");
const cors = require("cors");
const WinstonLogger_1 = require("./config/WinstonLogger");
const PORT = 8005;
class App {
    constructor() {
        this.app = express();
        this.routePrv = new Routes_1.Routes();
        this.logger = new WinstonLogger_1.WinstonLogger();
        this.mongoUrl = 'mongodb://admin:password@localhost:27017/GeppettoStage?authSource=admin';
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }));
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(res => { console.log('mongodb connected'); })
            .catch(err => { console.log('mongo error in connection:', err); });
    }
}
new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
});
//# sourceMappingURL=server.js.map