import { Request, Response } from 'express';
import {studnetsDao} from '../dao/studnetsDao';
import { CustomLogger } from '../config/Logger'
let studnets = new studnetsDao();

export class studnetsService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studnetsService.ts: GpGetAllValues')
     
     studnets.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studnetsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studnetsService.ts: GpCreate')
     const  studnetsData = req.body;
     studnets.GpCreate(studnetsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studnetsService.ts: GpCreate')
         callback(response);
         });
    }


}