
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TicketsSchema = new Schema({
   Name: String,
   Description: String,
   Type: { type: Schema.Types.String, ref: 'servicetypes' },
   Severity: { type: Schema.Types.String, ref: 'Severity' }
})

const TicketsModel = mongoose.model('Tickets', TicketsSchema, 'Tickets');
export default TicketsModel;
