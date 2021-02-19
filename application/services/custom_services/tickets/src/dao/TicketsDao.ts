import * as mongoose from 'mongoose';
import TicketsModel from '../models/Tickets';
import { CustomLogger } from '../config/Logger'


export class TicketsDao {
    private Tickets = TicketsModel;
    constructor() { }
public GpDelete(TicketsId, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpDelete')

this.Tickets.findByIdAndRemove(TicketsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(TicketsData, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(TicketsData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.Tickets.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(TicketsData, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpSearchForUpdate')

this.Tickets.findOneAndUpdate({ _id: TicketsData._id }, TicketsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(TicketsData, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpUpdate')

this.Tickets.findOneAndUpdate({ _id: TicketsData._id }, TicketsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpGetAllValues')

this.Tickets.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(TicketsData, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpCreate')
let temp = new TicketsModel(TicketsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(TicketsId, callback){
new CustomLogger().showLogger('info', 'Enter into TicketsDao.ts: GpGetNounById')

this.Tickets.findById(TicketsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from TicketsDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}