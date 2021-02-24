import { Request, Response, NextFunction } from "express";
import { listController } from '../controller/listController';


export class Routes {
    private list: listController = new listController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/list').post(this.list.GpCreate);
app.route('/list').get(this.list.GpGetAllValues);
     }

}