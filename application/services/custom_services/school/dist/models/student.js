"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.studentSchema = new Schema({
    Name: String,
    Email: String
});
const studentModel = mongoose.model('student', exports.studentSchema, 'student');
exports.default = studentModel;
//# sourceMappingURL=student.js.map