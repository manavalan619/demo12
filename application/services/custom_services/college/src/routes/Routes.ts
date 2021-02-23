import { Request, Response, NextFunction } from "express";
import { staffController } from '../controller/staffController';


export class Routes {
    private staff: staffController = new staffController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/staff').get(this.staff.GpGetAllValues);
app.route('/staff').post(this.staff.GpCreate);
     }

}