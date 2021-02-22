import { Request, Response } from 'express';
import {studentDao} from '../dao/studentDao';
import { CustomLogger } from '../config/Logger'
let student = new studentDao();

export class studentService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpGetAllValues')
     
     student.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentService.ts: GpCreate')
     const  studentData = req.body;
     student.GpCreate(studentData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentService.ts: GpCreate')
         callback(response);
         });
    }


}