import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GenesService } from './genes-service/genes.service';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular-highcharts';
import { DataTablesModule } from 'angular-datatables';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GeneTableComponent } from './gene-table/gene-table.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    GeneTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
    DataTablesModule
  ],
  providers: [GenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
