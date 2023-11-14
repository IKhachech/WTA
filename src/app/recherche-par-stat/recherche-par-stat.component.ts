import { Component } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { Stats } from '../model/stat.model';
import { WtaTourService } from '../service/wta-tour.service';
@Component({
  selector: 'app-recherche-par-stat',
  templateUrl: './recherche-par-stat.component.html',
  styleUrls: ['./recherche-par-stat.component.css']
})
export class RechercheParStatComponent {
  wtatour! : WtaTour[];
  IdStat! : number;
  stats! : Stats[];
  
constructor(private wtatourService: WtaTourService){}

  ngOnInit(): void {
    this.wtatourService.listStat().
    subscribe(stats => {this.stats = stats._embedded.statses;
    console.log(stats);
    });
    }

    onChange() {
      this.wtatourService.rechercherParStat(this.IdStat).
      subscribe(wt =>{this.wtatour=wt});
      }
}
