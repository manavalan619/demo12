import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public studnets = {
        Name: '',
        Email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createService.GpCreate(this.studnets).subscribe(data => {
            this.studnets.Name = ''
 	 	this.studnets.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}