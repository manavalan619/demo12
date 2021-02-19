import { Request, Response } from 'express';
import {TicketsDao} from '../dao/TicketsDao';
import { CustomLogger } from '../config/Logger'
let Tickets = new TicketsDao();

export class TicketsService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpDelete')
     const  TicketsId = req.params.id;
     Tickets.GpDelete(TicketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpSearch')
     const  TicketsData = req.query;
     Tickets.GpSearch(TicketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpSearchForUpdate')
     const  TicketsData = req.body;
     Tickets.GpSearchForUpdate(TicketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpUpdate')
     const  TicketsData = req.body;
     Tickets.GpUpdate(TicketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpGetAllValues')
     
     Tickets.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpCreate')
     const  TicketsData = req.body;
     Tickets.GpCreate(TicketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into TicketsService.ts: GpGetNounById')
     const  TicketsId = req.params.id;
     Tickets.GpGetNounById(TicketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from TicketsService.ts: GpGetNounById')
         callback(response);
         });
    }


}