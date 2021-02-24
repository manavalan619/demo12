import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class studentsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/students', this.GpCreate);
this.router.get('/students', this.GpGetAllValues);
    }

public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpCreate');
        new ApiAdaptar().post(Constant.SCHOOLURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into studentsController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.SCHOOLURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from studentsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }




}
