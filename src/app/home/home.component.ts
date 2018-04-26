import { Component, OnInit } from '@angular/core';
import { Service, Sale } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [Service]
})

export class HomeComponent implements OnInit {

  sales: Sale[];
  custom_options:any;
    dataSource: any;

    constructor(service: Service) {
      this.custom_options = {
        texts:{
          title:'字段配置'
        }
      }
        this.dataSource = {
            fields: [{
                caption: '大洲',
                width: 120,
                dataField: 'region',
                area: 'row'
            }, {
                caption: '城市',
                dataField: 'city',
                width: 150,
                area: 'row',
                selector: this.citySelector
            },{
              caption:'国家',
              dataField: 'country'
            }, {
                caption:'日期',
                dataField: 'date',
                dataType: 'date',
                area: 'column'
            }, {
                caption: '销量',
                dataField: 'amount',
                dataType: 'number',
                summaryType: 'sum',
                format: 'currency',
                area: 'data'
            }],
            store: service.getSales()
        }
    }

    citySelector(data) {
        return data.city + ' (' + data.country + ')';
    }
    ngOnInit(){

    }
}
