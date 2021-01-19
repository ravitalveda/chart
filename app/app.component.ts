import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chart: Chart;
  name = 'Angular 7 chartjs';

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: dringlichkeiten.map(x => x.id),
        datasets: [
          {
            label: 'My Bar Chart',
            data: dringlichkeiten.map(x => x.value),
            backgroundColor: ['red', 'green', 'yellow', 'blue', 'orange']
          }
        ]
      },
    });
  }
}


var dringlichkeiten  = [{
    "id": 1,
    "value": 883
},
{
    "id": 2,
    "value": 5925
},
{
    "id": 3,
    "value": 17119
},
{
    "id": 4,
    "value": 27144
},
{
    "id": 5,
    "value": 2758
}];