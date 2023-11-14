import { Component, OnInit } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { WtaTourService } from '../service/wta-tour.service';

@Component({
  selector: 'app-wta-tour',
  templateUrl: './wta-tour.component.html',
  styleUrls: ['./wta-tour.component.css']
})

export class WtaTourComponent implements OnInit {
  currentWtatour = new WtaTour();
  wtatour!: WtaTour[];  

  constructor(private wtatourService: WtaTourService ) {}
  ngOnInit(): void {
   this.chargerWtaTour();
    }
  
chargerWtaTour(){
  this.wtatourService.listWtaTour().subscribe(tours => {
    console.log(tours);
    this.wtatour = tours;
    });
}

suppWtaTour(wt: WtaTour)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.wtatourService.suppWtaTour(wt.idTour!).subscribe(() => {
console.log("Tour deleted");
this.chargerWtaTour();
});
} 


  updateWtaTour()
{ //console.log(this.currentProduit);
this.wtatourService.updateWtaTour(this.currentWtatour);
}
  
}


 




