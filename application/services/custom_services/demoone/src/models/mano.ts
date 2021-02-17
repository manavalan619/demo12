
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const manoSchema = new Schema({
   Name: String,
   Email: String
})

const manoModel = mongoose.model('mano', manoSchema, 'mano');
export default manoModel;
