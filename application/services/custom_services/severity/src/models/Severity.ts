
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SeveritySchema = new Schema({
   Name: String,
   Description: String
})

const SeverityModel = mongoose.model('Severity', SeveritySchema, 'Severity');
export default SeverityModel;
