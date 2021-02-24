import { Request, Response } from 'express';
import {listDao} from '../dao/listDao';
import { CustomLogger } from '../config/Logger'


export class listService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into listService.ts: GpCreate')
     const  listData = req.body;
     list.GpCreate(listData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from listService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into listService.ts: GpGetAllValues')
     
     list.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from listService.ts: GpGetAllValues')
         callback(response);
         });
    }


}