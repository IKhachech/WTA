import { Component } from '@angular/core';
import { WtaTourService } from '../service/wta-tour.service';
import { Stats } from '../model/stat.model';

@Component({
  selector: 'app-list-stat',
  templateUrl: './list-stat.component.html',
  styleUrls: ['./list-stat.component.css']
})
export class ListStatComponent {
  stats!: Stats[];

  ajout:boolean=true;

  updatedStat:Stats = {
    "idStat": 0, "namePlayer": "",
    "nationality": "",
    "ranking": 0,
    "titlesWon": 0
  };
 constructor(private wtatourService: WtaTourService) {}
 
 ngOnInit(): void {
  this.wtatourService.listStat().
  subscribe(stats => {this.stats = stats._embedded.statses
  console.log(stats);
  });
  }

  statUpdated(st:Stats){
    console.log("Cat updated event",st);
    this.wtatourService.ajouterStat(st).
     subscribe( ()=> this.chargerStat());
    }
    chargerStat(){
      this.wtatourService.listStat().
      subscribe(stats => {this.stats = stats._embedded.statses;
      console.log(stats);
      });
      }
      updatedStats(st:Stats){
       this.updatedStat = st;
       this.ajout=false;
      }

      
}
