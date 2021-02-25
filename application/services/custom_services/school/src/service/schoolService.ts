import { Request, Response } from 'express';
import {schoolDao} from '../dao/schoolDao';
import { CustomLogger } from '../config/Logger'
let school = new schoolDao();

export class schoolService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpGetAllValues')
     
     school.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpCreate')
     const  schoolData = req.body;
     school.GpCreate(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpCreate')
         callback(response);
         });
    }


}