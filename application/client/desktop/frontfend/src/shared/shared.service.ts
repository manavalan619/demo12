import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class SharedService {

     public  = 'http://3.83.8.72:8000/desktop';DESKTOP_API
    public MOBILE_API = environment.MOBILE_API;
}
