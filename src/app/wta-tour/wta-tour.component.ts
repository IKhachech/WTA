import { Component, OnInit } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { WtaTourService } from '../service/wta-tour.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-wta-tour',
  templateUrl: './wta-tour.component.html',
  styleUrls: ['./wta-tour.component.css']
})

export class WtaTourComponent implements OnInit {
  currentWtatour = new WtaTour();
  wtatour?: WtaTour[];  
  apiurl:string='http://localhost:8085/spring01/api';
  constructor(private wtatourService: WtaTourService,router:Router, public authService: AuthService ) {}
  ngOnInit(): void {
   this.chargerWtaTour();
    }
  
/*chargerWtaTour(){
  this.wtatourService.listWtaTour().subscribe(tours => {
    console.log(tours);
    this.wtatour = tours;
    this.wtatour.forEach((wt) => { 
      this.wtatourService .loadImage(wt.image.idImage) 
      .subscribe((img: Image) => { 
        wt.imageStr = 'data:' + img.type + ';base64,' + img.image;
       });
       });
    });
}*/
/*chargerWtaTour(){ 
  this.wtatourService.listWtaTour().subscribe(
    tours => {
      this.wtatour = tours;
      this.wtatour.forEach((wt) => {
        if (wt.images && wt.images.length > 0) {
          wt.imageStr = 'data:' + wt.images[0].type + ';base64,' + wt.images[0].image;
        }
      });
    }
  ); }*/
  chargerWtaTour(){ 
    this.wtatourService.listWtaTour().subscribe(
      tours => { this.wtatour = tours; }); 
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


 




