import { Component, OnInit } from '@angular/core';
import { CreateticketService } from './createticket.service';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
    servicetypesitemArray: any = [];
    SeverityitemArray: any = [];
    public Tickets = {
        Name: '',
        Description: '',
        Type: '',
        Severity: '',
    }

    constructor (
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.createticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    SeverityGpGetAllValues() {
        this.createticketService.SeverityGpGetAllValues().subscribe(data => {
            this.SeverityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketService.GpCreate(this.Tickets).subscribe(data => {
            this.Tickets.Name = ''
 	 	this.Tickets.Description = ''
 	 	this.Tickets.Type = ''
 	 	this.Tickets.Severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}