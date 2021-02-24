
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const listSchema = new Schema({
   Name: String,
   Email: String
})

const listModel = mongoose.model('list', listSchema, 'list');
export default listModel;
