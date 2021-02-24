
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentsSchema = new Schema({
   Name: String,
   Email: String
})

const studentsModel = mongoose.model('students', studentsSchema, 'students');
export default studentsModel;
