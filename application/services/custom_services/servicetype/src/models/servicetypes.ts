
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const servicetypesSchema = new Schema({
   Name: String,
   Description: String
})

const servicetypesModel = mongoose.model('servicetypes', servicetypesSchema, 'servicetypes');
export default servicetypesModel;
