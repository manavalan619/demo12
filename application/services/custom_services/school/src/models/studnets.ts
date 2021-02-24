
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studnetsSchema = new Schema({
   Name: String,
   Email: String
})

const studnetsModel = mongoose.model('studnets', studnetsSchema, 'studnets');
export default studnetsModel;
