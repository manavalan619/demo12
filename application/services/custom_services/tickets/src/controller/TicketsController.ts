import { Request, Response } from 'express';
import { TicketsService } from '../service/TicketsService';
import { CustomLogger } from '../config/Logger'
let Tickets = new TicketsService();

export class TicketsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Tickets.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
Tickets.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Tickets.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
Tickets.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
Tickets.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Tickets.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpCreate');
    })}
public GpGetNounById(req: Request, res: Response) {
Tickets.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into TicketsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from TicketsController.ts: GpGetNounById');
    })}


}