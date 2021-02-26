import { Request, Response } from 'express';
import {studentsDao} from '../dao/studentsDao';
import { CustomLogger } from '../config/Logger'
let students = new studentsDao();

export class studentsService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpGetAllValues')
     
     students.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpCreate')
     const  studentsData = req.body;
     students.GpCreate(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpCreate')
         callback(response);
         });
    }


}