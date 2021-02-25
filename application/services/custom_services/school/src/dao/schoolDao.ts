import * as mongoose from 'mongoose';
import schoolModel from '../models/school';
import { CustomLogger } from '../config/Logger'


export class schoolDao {
    private school = schoolModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpGetAllValues')

this.school.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(schoolData, callback){
new CustomLogger().showLogger('info', 'Enter into schoolDao.ts: GpCreate')
let temp = new schoolModel(schoolData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from schoolDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}