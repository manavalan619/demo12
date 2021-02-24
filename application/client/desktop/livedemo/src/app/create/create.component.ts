import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public staff = {
        Name: '',
        Email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createService.GpCreate(this.staff).subscribe(data => {
            this.staff.Name = ''
 	 	this.staff.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}