import { Component, OnInit } from '@angular/core';
import { CraeteService } from './craete.service';

@Component({
  selector: 'app-craete',
  templateUrl: './craete.component.html',
  styleUrls: ['./craete.component.scss'],
})

export class CraeteComponent implements OnInit {
    public staff = {
        Name: '',
        Email: '',
    }

    constructor (
        private craeteService: CraeteService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.craeteService.GpCreate(this.staff).subscribe(data => {
            this.staff.Name = ''
 	 	this.staff.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}