import { Request, Response } from 'express';
import { manoService } from '../service/manoService';
import { CustomLogger } from '../config/Logger'
let mano = new manoService();

export class manoController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
mano.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpCreate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
mano.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
mano.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpGetAllValues');
    })}


}