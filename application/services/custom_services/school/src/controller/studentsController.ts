import { Request, Response } from 'express';
import { studentsService } from '../service/studentsService';
import { CustomLogger } from '../config/Logger'
let students = new studentsService();

export class studentsController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
students.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
students.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpCreate');
    })}


}