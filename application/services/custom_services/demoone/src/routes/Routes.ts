import { Request, Response, NextFunction } from "express";
import { manoController } from '../controller/manoController';


export class Routes {
    private mano: manoController = new manoController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/mano').post(this.mano.GpCreate);
app.route('/mano/get/update').put(this.mano.GpSearchForUpdate);
app.route('/mano').get(this.mano.GpGetAllValues);
     }

}