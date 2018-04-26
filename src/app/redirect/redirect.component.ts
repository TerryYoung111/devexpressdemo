import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  dataSource: any;

    constructor() {
        this.dataSource = {
            fields: [
                { dataField: '[Product].[Category]', area: 'row' },
                {
                    dataField: "[Product].[Subcategory]",
                    area: "row",
                    headerFilter: {
                        allowSearch: true
                    }
                },
                { dataField: '[Ship Date].[Calendar Year]', area: 'column' },
                { dataField: '[Ship Date].[Month of Year]', area: 'column' },
                { dataField: '[Measures].[Customer Count]', area: 'data' }
            ],
            store: {
                type: 'xmla',
                url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
                catalog: 'Adventure Works DW Standard Edition',
                cube: 'Adventure Works'
            }
        }
    }

  ngOnInit() {
  }

}
