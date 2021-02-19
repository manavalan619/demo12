import { Component, OnInit } from '@angular/core';
import { GetallticketsService } from './getalltickets.service';

@Component({
  selector: 'app-getalltickets',
  templateUrl: './getalltickets.component.html',
  styleUrls: ['./getalltickets.component.scss'],
})

export class GetallticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Description', field: 'Description'  },{ headerName: 'Servicetype', field: 'Type'  },{ headerName: 'Severity', field: 'Severity'  },];
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
        private getallticketsService: GetallticketsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}