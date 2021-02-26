import * as mongoose from 'mongoose';
import studentsModel from '../models/students';
import { CustomLogger } from '../config/Logger'


export class studentsDao {
    private students = studentsModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpGetAllValues')

this.students.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(studentsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpCreate')
let temp = new studentsModel(studentsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}