import { Component, OnInit } from '@angular/core';
import { UpdatedeleteService } from './updatedelete.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatedelete',
  templateUrl: './updatedelete.component.html',
  styleUrls: ['./updatedelete.component.scss'],
})

export class UpdatedeleteComponent implements OnInit {
    queryId: any;
    public students = {
        Name: '',
        Email: '',
    }

    constructor (
        private updatedeleteService: UpdatedeleteService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    GpUpdate() {
        this.updatedeleteService.GpUpdate(this.students).subscribe(data => {
            this.students.Name = ''
 	 	this.students.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updatedeleteService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.updatedeleteService.GpGetNounById(this.queryId).subscribe(data => {
            this.students = data
        },
        error => {
            console.log('Error', error);
        });
    }
}