import { Request, Response } from 'express';
import { studnetsService } from '../service/studnetsService';
import { CustomLogger } from '../config/Logger'
let studnets = new studnetsService();

export class studnetsController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
studnets.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studnetsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studnetsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
studnets.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studnetsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studnetsController.ts: GpCreate');
    })}


}