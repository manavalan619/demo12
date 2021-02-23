"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
const studentDao_1 = require("../dao/studentDao");
const Logger_1 = require("../config/Logger");
let student = new studentDao_1.studentDao();
class studentService {
    constructor() { }
    GpGetAllValues(req, callback) {
        new Logger_1.CustomLogger().showLogger('info', 'Enter into studentService.ts: GpGetAllValues');
        student.GpGetAllValues((response) => {
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentService.ts: GpGetAllValues');
            callback(response);
        });
    }
    GpCreate(req, callback) {
        new Logger_1.CustomLogger().showLogger('info', 'Enter into studentService.ts: GpCreate');
        const studentData = req.body;
        student.GpCreate(studentData, (response) => {
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentService.ts: GpCreate');
            callback(response);
        });
    }
}
exports.studentService = studentService;
//# sourceMappingURL=studentService.js.map