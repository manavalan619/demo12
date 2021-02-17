import { Request, Response } from 'express';
import {schoolDao} from '../dao/schoolDao';
import { CustomLogger } from '../config/Logger'


export class schoolService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpDelete')
     const  schoolId = req.params.id;
     school.GpDelete(schoolId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpDelete')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpUpdate')
     const  schoolData = req.body;
     school.GpUpdate(schoolData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpUpdate')
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
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into schoolService.ts: GpGetAllValues')
     
     school.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from schoolService.ts: GpGetAllValues')
         callback(response);
         });
    }


}