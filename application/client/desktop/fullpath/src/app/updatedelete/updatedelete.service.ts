import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatedeleteService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(students): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/students', students);
    }
    GpDelete(studentsId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/students/' + studentsId);
    }
    GpGetNounById(studentsId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/students/' + studentsId);
    }
}