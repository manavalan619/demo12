import { Request, Response, NextFunction } from "express";
import { studnetsController } from '../controller/studnetsController';


export class Routes {
    private studnets: studnetsController = new studnetsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studnets').get(this.studnets.GpGetAllValues);
app.route('/studnets').post(this.studnets.GpCreate);
     }

}