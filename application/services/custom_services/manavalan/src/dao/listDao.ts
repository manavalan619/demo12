import * as mongoose from 'mongoose';
import listModel from '../models/list';
import { CustomLogger } from '../config/Logger'


export class listDao {
    
    constructor() { }
public GpCreate(listData, callback){
new CustomLogger().showLogger('info', 'Enter into listDao.ts: GpCreate')
let temp = new listModel(listData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from listDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into listDao.ts: GpGetAllValues')

this.list.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from listDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}