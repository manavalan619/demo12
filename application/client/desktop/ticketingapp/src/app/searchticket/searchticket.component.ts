import { Component, OnInit } from '@angular/core';
import { SearchticketService } from './searchticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchticket',
  templateUrl: './searchticket.component.html',
  styleUrls: ['./searchticket.component.scss'],
})

export class SearchticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Description', field: 'Description'  },{ headerName: 'ServiceTypes', field: 'Type'  },{ headerName: 'Severity', field: 'Severity'  },];
    servicetypesitemArray: any = [];
    SeverityitemArray: any = [];
    public Tickets = {
        Name: '',
        Description: '',
        Type: '',
        Severity: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private searchticketService: SearchticketService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.searchticketService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    SeverityGpGetAllValues() {
        this.searchticketService.SeverityGpGetAllValues().subscribe(data => {
            this.SeverityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchticketService.GpSearch(this.Tickets).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.GpRoute(selectedRows[0]._id);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}