import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import * as Chart from 'chart.js';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChartRef: ElementRef = Object.create(null);

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    let data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const myChart = new Chart(this.myChartRef.nativeElement.getContext('2d'),
      {
        type: 'line',
        data: data,
        options: {}
      } //config
    );
    console.log('myChart', myChart);

  }

}
