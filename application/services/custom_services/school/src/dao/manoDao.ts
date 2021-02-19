import * as mongoose from 'mongoose';
import manoModel from '../models/mano';
import { CustomLogger } from '../config/Logger'


export class manoDao {
    private mano = manoModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpGetAllValues')

this.mano.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(manoData, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpCreate')
let temp = new manoModel(manoData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}