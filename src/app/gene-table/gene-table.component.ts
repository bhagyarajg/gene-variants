import { Component, OnInit } from '@angular/core';
import { GenesService } from '../genes-service/genes.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-gene-table',
  templateUrl: './gene-table.component.html',
  styleUrls: ['./gene-table.component.css']
})
export class GeneTableComponent implements OnInit {

  constructor(private geneService: GenesService) {
  }
  dtOptions: DataTables.Settings = {};
  genes: any[] = [];
  dtTrigger: Subject<any> = new Subject();
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.geneService.getGeneVariants()
       .subscribe(genes => {
        this.genes = genes;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

}
