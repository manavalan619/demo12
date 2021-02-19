import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class manoController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/mano', this.GpGetAllValues);
this.router.post('/mano', this.GpCreate);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SCHOOLURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SCHOOLURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
