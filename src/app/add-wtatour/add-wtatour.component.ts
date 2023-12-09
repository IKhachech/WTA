import { Component, OnInit } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { WtaTourService } from '../service/wta-tour.service'; 
import { Stats } from '../model/stat.model';
import { Router} from '@angular/router';
import { Image } from '../model/image.model';
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
  uploadedImage!: File;
  imagePath: any;
  

  constructor(private wtatourService: WtaTourService,private router :Router) {}
 

  ngOnInit(): void {

    this.wtatourService.listStat()
    .subscribe(stats => { this.stats = stats._embedded.statses;
         console.log(stats);
         

         }
    );
  }
  
    /*addWtaTour(){
      this.newTour.stats = this.stats.find(st => st.idStat == this.newIdSt)!;
      this.wtatourService.addWtaTour(this.newTour)
      .subscribe(wt => {
      console.log(wt);
      this.router.navigate(['wtatour']);
      });
      } */
      
  // addWtaTour() {
  //   this.wtatourService.uploadImageTour(
  //     this.uploadedImage, this.uploadedImage.name,).subscribe(
  //       (img: Image) => {
  //         this.newTour.image = img;
  //         this.newTour.stats = this.stats.find(
  //           st => st.idStat == this.newIdSt)!;

  //         this.wtatourService.addWtaTour(
  //           this.newTour).subscribe(() => {
  //             this.router.navigate(['wtatour']);
  //           });
  //       });
  // }
  addWtaTour() {
    this.wtatourService.addWtaTour(this.newTour)
      .subscribe((addedT: WtaTour) => {
        this.wtatourService.uploadImageTour(this.uploadedImage, this.uploadedImage.name , addedT.idTour!)
          .subscribe((img: Image) => {
            addedT.stats = this.stats.find(cat => cat.idStat == this.newIdSt)!;
            img.id_tour = addedT.idTour!;
            console.log(addedT.idTour)
            console.log(img.id_tour); 
            addedT.image = img;
  
            this.wtatourService.updateWtaTour(addedT)
              .subscribe(() => {
                this.router.navigate(['wtatour']);
              });
          });
      });
  }

  

/*
  addWtaTour(){ 
    this.newTour.stats = this.stats.find(
      st => st.idStat == this.newIdSt)!;
       this.wtatourService .addWtaTour(this.newTour) 
       .subscribe((img) => { 
        this.wtatourService .uploadImageFS(
          this.uploadedImage, this.uploadedImage.name,img.idTour) 
          .subscribe((response: any) => {} ); 
          this.router.navigate(['wtatour']); 
        });
       }*/



  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    }
  }

}


