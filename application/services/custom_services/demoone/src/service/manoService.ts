import { Request, Response } from 'express';
import {manoDao} from '../dao/manoDao';
import { CustomLogger } from '../config/Logger'


export class manoService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpCreate')
     const  manoData = req.body;
     mano.GpCreate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpSearchForUpdate')
     const  manoData = req.body;
     mano.GpSearchForUpdate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpGetAllValues')
     
     mano.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpGetAllValues')
         callback(response);
         });
    }


}