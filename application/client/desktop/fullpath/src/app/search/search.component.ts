import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Email', field: 'Email'  },];
    public students = {
        Name: '',
        Email: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchService: SearchService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchService.GpSearch(this.students).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updatedelete'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}