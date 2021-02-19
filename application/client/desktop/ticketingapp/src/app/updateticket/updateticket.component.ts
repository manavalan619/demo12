import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
    servicetypesitemArray: any = [];
    SeverityitemArray: any = [];
    public Tickets = {
        Name: '',
        Description: '',
        Type: '',
        Severity: '',
    }

    constructor (
        private updateticketService: UpdateticketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    servicetypesGpGetAllValues() {
        this.updateticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    SeverityGpGetAllValues() {
        this.updateticketService.SeverityGpGetAllValues().subscribe(data => {
            this.SeverityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.Tickets).subscribe(data => {
            this.Tickets.Name = ''
 	 	this.Tickets.Description = ''
 	 	this.Tickets.Type = ''
 	 	this.Tickets.Severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updateticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.Tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}