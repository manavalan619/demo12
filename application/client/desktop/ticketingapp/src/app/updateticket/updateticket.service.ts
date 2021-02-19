import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdateticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(Tickets): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/Tickets', Tickets);
    }
    GpGetNounById(TicketsId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/Tickets/' + TicketsId);
    }
    servicetypesGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/servicetypes');
    }
    SeverityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/Severity');
    }
}