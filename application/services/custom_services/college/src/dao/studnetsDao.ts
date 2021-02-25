import * as mongoose from 'mongoose';
import studnetsModel from '../models/studnets';
import { CustomLogger } from '../config/Logger'


export class studnetsDao {
    private studnets = studnetsModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studnetsDao.ts: GpGetAllValues')

this.studnets.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studnetsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(studnetsData, callback){
new CustomLogger().showLogger('info', 'Enter into studnetsDao.ts: GpCreate')
let temp = new studnetsModel(studnetsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studnetsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}