import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { GenesService } from '../genes-service/genes.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
    options;
    genes;
    result;
    chart;
  constructor(private geneService: GenesService) {
   geneService.getGeneVariants()
   .subscribe(
         genes => { this.genes = genes;
                  this.result = _.groupBy(this.genes, function(variant) { return variant.consequence.term; });
                  console.log(Object.keys(this.result));
                  Object.keys(this.result).forEach((key) => this.options.series[0].data.push(this.result[key].length));
                  this.options.xAxis.categories = Object.keys(this.result);
                  this.chart = new Chart(this.options);
                  },
         error => console.log(error)
   );
   this.options = {
     chart: {type: 'column'},
     credits: {
       enabled: false
       },
     title : { text : ' Gene variants breakdown by consequence term' },
     xAxis: {
       title: {
         text: 'Term'
       },
       crosshair: true
     },
     yAxis: {
       min: 0,
       title: {
           text: 'Count'
       }
     },
     series: [{
       data : []
         }]
   };
  }

  ngOnInit() {}
  }


