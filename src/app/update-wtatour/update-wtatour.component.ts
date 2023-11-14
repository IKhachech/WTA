import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { WtaTourService } from '../service/wta-tour.service';
import { WtaTour } from '../model/wta-tour.model';
import { Stats } from '../model/stat.model';
@Component({
  selector: 'app-update-wtatour',
  templateUrl: './update-wtatour.component.html',
  styles: [
  ]
})

export class UpdateWtatourComponent implements OnInit {
currentWtatour = new WtaTour();
stats! : Stats[];
updatedStId? : number;

constructor(
  private activatedRoute: ActivatedRoute,
  private router :Router,
private wtatourService: WtaTourService) { }

    ngOnInit(): void { 
      this.wtatourService.listStat().subscribe(statWrapper => {
        this.stats = statWrapper._embedded.statses;
        console.log(statWrapper); // Check the console for the entire response
      });
      this.wtatourService.consulterWtaTour(this.activatedRoute.snapshot.params['id']).
       subscribe(wt =>{this.currentWtatour = wt;
                       this.updatedStId =
       this.currentWtatour.stats.idStat; 
            } ) ;
             }

updateWtaTour()
{  
  this.currentWtatour.stats = this.stats.
   find(st => st.idStat == this.updatedStId)!;
  this.wtatourService.updateWtaTour(this.currentWtatour).subscribe(_wt => {
  this.router.navigate(['wtatour']); } 
    );
 }

}