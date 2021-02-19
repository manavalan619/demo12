import { Request, Response } from 'express';
import { manoService } from '../service/manoService';
import { CustomLogger } from '../config/Logger'
let mano = new manoService();

export class manoController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
mano.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
mano.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpCreate');
    })}


}