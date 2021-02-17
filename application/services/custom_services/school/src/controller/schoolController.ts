import { Request, Response } from 'express';
import { schoolService } from '../service/schoolService';
import { CustomLogger } from '../config/Logger'
let school = new schoolService();

export class schoolController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
school.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpDelete');
    })}
public GpUpdate(req: Request, res: Response) {
school.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
school.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpCreate');
    })}
public GpGetAllValues(req: Request, res: Response) {
school.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into schoolController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from schoolController.ts: GpGetAllValues');
    })}


}