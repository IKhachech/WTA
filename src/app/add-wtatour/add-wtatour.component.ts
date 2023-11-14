import { Component, OnInit } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { WtaTourService } from '../service/wta-tour.service'; 
import { Stats } from '../model/stat.model';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-wtatour',
  templateUrl: './add-wtatour.component.html',
  styleUrls: ['./add-wtatour.component.css']
})
export class AddWtatourComponent implements OnInit {
  stats!: Stats[];
  newIdSt!: number; // ou toute autre valeur par défaut que vous souhaitez
  newSt! : Stats;
  newTour = new WtaTour();
  constructor(private wtatourService: WtaTourService,private router :Router) {}
 

  ngOnInit(): void {

    this.wtatourService.listStat()
    .subscribe(stats => { this.stats = stats._embedded.statses;
         console.log(stats);
         
         }
    );
  }
  
    addWtaTour(){
      this.newTour.stats = this.stats.find(st => st.idStat == this.newIdSt)!;
      this.wtatourService.addWtaTour(this.newTour)
      .subscribe(wt => {
      console.log(wt);
      this.router.navigate(['wtatour']);
      });
      }  

}


