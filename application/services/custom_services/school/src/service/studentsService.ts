import { Request, Response } from 'express';
import {studentsDao} from '../dao/studentsDao';
import { CustomLogger } from '../config/Logger'


export class studentsService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpCreate')
     const  studentsData = req.body;
     students.GpCreate(studentsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentsService.ts: GpGetAllValues')
     
     students.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentsService.ts: GpGetAllValues')
         callback(response);
         });
    }


}