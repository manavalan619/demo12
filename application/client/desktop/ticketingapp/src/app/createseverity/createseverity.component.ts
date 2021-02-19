import { Component, OnInit } from '@angular/core';
import { CreateseverityService } from './createseverity.service';

@Component({
  selector: 'app-createseverity',
  templateUrl: './createseverity.component.html',
  styleUrls: ['./createseverity.component.scss'],
})

export class CreateseverityComponent implements OnInit {
    public Severity = {
        Name: '',
        Description: '',
    }

    constructor (
        private createseverityService: CreateseverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createseverityService.GpCreate(this.Severity).subscribe(data => {
            this.Severity.Name = ''
 	 	this.Severity.Description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}