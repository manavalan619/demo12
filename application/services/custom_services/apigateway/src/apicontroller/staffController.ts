import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class staffController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/staff', this.GpGetAllValues);
this.router.post('/staff', this.GpCreate);
    }

public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into staffController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.COLLEGEURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from staffController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into staffController.ts: GpCreate');
        new ApiAdaptar().post(Constant.COLLEGEURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from staffController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
