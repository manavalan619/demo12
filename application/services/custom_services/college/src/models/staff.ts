
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const staffSchema = new Schema({
   Name: String,
   Email: String
})

const staffModel = mongoose.model('staff', staffSchema, 'staff');
export default staffModel;
