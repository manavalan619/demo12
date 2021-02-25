import { Request, Response } from 'express';
import {manoDao} from '../dao/manoDao';
import { CustomLogger } from '../config/Logger'
let mano = new manoDao();

export class manoService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpGetAllValues')
     
     mano.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpCreate')
     const  manoData = req.body;
     mano.GpCreate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpCreate')
         callback(response);
         });
    }


}