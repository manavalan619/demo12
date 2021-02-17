
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schoolSchema = new Schema({
   Name: String,
   Email: String
})

const schoolModel = mongoose.model('school', schoolSchema, 'school');
export default schoolModel;
