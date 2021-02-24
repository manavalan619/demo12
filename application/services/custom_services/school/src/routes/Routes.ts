import { Request, Response, NextFunction } from "express";
import { studentsController } from '../controller/studentsController';


export class Routes {
    private students: studentsController = new studentsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/students').post(this.students.GpCreate);
app.route('/students').get(this.students.GpGetAllValues);
     }

}