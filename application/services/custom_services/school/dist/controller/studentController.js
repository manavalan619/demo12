"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const studentService_1 = require("../service/studentService");
const Logger_1 = require("../config/Logger");
let student = new studentService_1.studentService();
class studentController {
    constructor() { }
    GpGetAllValues(req, res) {
        student.GpGetAllValues(req, (response) => {
            new Logger_1.CustomLogger().showLogger('info', 'Enter into studentController.ts: GpGetAllValues');
            res.status(200);
            res.json(response);
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentController.ts: GpGetAllValues');
        });
    }
    GpCreate(req, res) {
        student.GpCreate(req, (response) => {
            new Logger_1.CustomLogger().showLogger('info', 'Enter into studentController.ts: GpCreate');
            res.status(200);
            res.json(response);
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentController.ts: GpCreate');
        });
    }
}
exports.studentController = studentController;
//# sourceMappingURL=studentController.js.map