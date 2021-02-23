"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDao = void 0;
const student_1 = require("../models/student");
const Logger_1 = require("../config/Logger");
class studentDao {
    constructor() {
        this.student = student_1.default;
    }
    GpGetAllValues(callback) {
        new Logger_1.CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpGetAllValues');
        this.student.find().then((result) => {
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpGetAllValues');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    GpCreate(studentData, callback) {
        new Logger_1.CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpCreate');
        let temp = new student_1.default(studentData);
        ;
        temp.save().then((result) => {
            new Logger_1.CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpCreate');
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
}
exports.studentDao = studentDao;
//# sourceMappingURL=studentDao.js.map