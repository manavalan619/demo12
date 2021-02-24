import * as mongoose from 'mongoose';
import studentsModel from '../models/students';
import { CustomLogger } from '../config/Logger'


export class studentsDao {
    
    constructor() { }
public GpDelete(studentsId, callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpDelete')

this.students.findByIdAndRemove(studentsId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(studentsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpUpdate')

this.students.findOneAndUpdate({ _id: studentsData._id }, studentsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(studentsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(studentsData).forEach(
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
this.students.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpSearch');
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
public GpSearchForUpdate(studentsData, callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpSearchForUpdate')

this.students.findOneAndUpdate({ _id: studentsData._id }, studentsData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studentsDao.ts: GpGetAllValues')

this.students.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentsDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}