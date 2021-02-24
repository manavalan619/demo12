import { Request, Response } from 'express';
import { listService } from '../service/listService';
import { CustomLogger } from '../config/Logger'
let list = new listService();

export class listController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
list.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into listController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from listController.ts: GpCreate');
    })}
public GpGetAllValues(req: Request, res: Response) {
list.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into listController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from listController.ts: GpGetAllValues');
    })}


}