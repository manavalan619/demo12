import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    public student = {
        Name: '',
        Email: '',
    }

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createService.GpCreate(this.student).subscribe(data => {
            this.student.Name = ''
 	 	this.student.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}