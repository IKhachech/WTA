import { Component } from '@angular/core';
import { WtaTourService } from '../service/wta-tour.service';
import { WtaTour } from '../model/wta-tour.model';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  nameTour! : string;
  wtatour! : WtaTour[];
  allTour! : WtaTour[];
searchTerm!: string;

  constructor(private wtatourService: WtaTourService){}
  ngOnInit(): void {
    this.wtatourService.listWtaTour().subscribe(wt => {
    console.log(wt);
    this.wtatour = wt;
    this.allTour = wt;
    });
    }
    
  rechercherStats(){
    this.wtatourService.rechercherParNom(this.nameTour).
    subscribe(wt => {
    this.wtatour = wt;
    console.log(wt)});
    }

  onKeyUp(filtreText : string){
    this.wtatour = this.allTour.filter(item =>item?.nameTour.toLowerCase().includes(filtreText));
  }
}
