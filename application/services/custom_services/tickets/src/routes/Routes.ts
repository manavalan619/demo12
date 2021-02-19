import { Request, Response, NextFunction } from "express";
import { TicketsController } from '../controller/TicketsController';


export class Routes {
    private Tickets: TicketsController = new TicketsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Tickets/:id').delete(this.Tickets.GpDelete);
app.route('/Tickets/get/search').get(this.Tickets.GpSearch);
app.route('/Tickets/get/update').put(this.Tickets.GpSearchForUpdate);
app.route('/Tickets').put(this.Tickets.GpUpdate);
app.route('/Tickets').get(this.Tickets.GpGetAllValues);
app.route('/Tickets').post(this.Tickets.GpCreate);
app.route('/Tickets/:id').get(this.Tickets.GpGetNounById);
     }

}