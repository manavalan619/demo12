import { Component, OnInit } from '@angular/core';
import { GoService } from './go.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss'],
})

export class GoComponent implements OnInit {
    public mano = {
        Name: '',
        Email: '',
    }

    constructor (
        private goService: GoService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.goService.GpCreate(this.mano).subscribe(data => {
            this.mano.Name = ''
 	 	this.mano.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}