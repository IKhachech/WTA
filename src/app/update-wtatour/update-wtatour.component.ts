import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { WtaTourService } from '../service/wta-tour.service';
import { WtaTour } from '../model/wta-tour.model';
import { Stats } from '../model/stat.model';
import { Image } from '../model/image.model';
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
myImage! : string;
uploadedImage!: File;
isImageUpdated: Boolean=false;
images!:Image[];


constructor(
  private activatedRoute: ActivatedRoute,
  private router :Router,
private wtatourService: WtaTourService) { }

   /* ngOnInit(): void { 
      this.wtatourService.listStat().subscribe(statWrapper => {
        this.stats = statWrapper._embedded.statses;
        console.log(statWrapper); // Check the console for the entire response
      });


      this.wtatourService.consulterWtaTour(this.activatedRoute.snapshot.params['id']).
       subscribe(wt =>{this.currentWtatour = wt;
                       this.updatedStId = this.currentWtatour.stats.idStat; 

                       this.wtatourService .loadImage(this.currentWtatour.image.idImage)
                        .subscribe((img: Image) => {
                         this.myImage = 'data:' + img.type + ';base64,' + img.image; });
            } ) ;
             }*/

ngOnInit(): void { 
  this.wtatourService.listStat().subscribe(statWrapper => {
    this.stats = statWrapper._embedded.statses;
     }); 
     this.wtatourService.consulterWtaTour(
      this.activatedRoute.snapshot.params['id']).subscribe(
         wt =>{ this.currentWtatour = wt; 
          this.updatedStId = wt.stats.idStat;
          
         } ) 
         ; }            
            

/*updateWtaTour()
{  
  this.currentWtatour.stats = this.stats.
   find(st => st.idStat == this.updatedStId)!;
  this.wtatourService.updateWtaTour(this.currentWtatour).subscribe(_wt => {
  this.router.navigate(['wtatour']); } 
    );
 }*/

 /* updateWtaTour() {
    this.currentWtatour.stats = this.stats.find(
      st => st.idStat == this.updatedStId)!; //tester si l'image du produit a été modifiée 
    if (this.isImageUpdated) {
      this.wtatourService.uploadImage(
        this.uploadedImage, this.uploadedImage.name).subscribe(
          (img: Image) => {
            this.currentWtatour.image = img;
            this.wtatourService.updateWtaTour(
              this.currentWtatour).subscribe((_wt) => {
                this.router.navigate(['wtatour']);
              });
          });
    } else {
      this.wtatourService.updateWtaTour(this.currentWtatour).subscribe(
        (_wt) => {
          this.router.navigate(['wtatour']);
        });
    }
  }*/


  updateWtaTour() { 
    this.currentWtatour.stats = this.stats.find(
      st => st.idStat == this.updatedStId)!;
       this.wtatourService .updateWtaTour(this.currentWtatour) 
       .subscribe((_wt) => { this.router.navigate(['wtatour']); }); }

 onImageUpload(event: any) { 
  if(event.target.files && event.target.files.length) { 
    this.uploadedImage = event.target.files[0]; 
    this.isImageUpdated =true; 
    const reader = new FileReader(); 
    reader.readAsDataURL(this.uploadedImage); 
    reader.onload = () => { this.myImage = reader.result as string; }; } }


    onAddImageWtatour() { 
      this.wtatourService .uploadImageTour(
        this.uploadedImage, this.uploadedImage.name,this.currentWtatour.idTour
        ) .subscribe(
           (img : Image) => {
             this.currentWtatour.images.push(img);
             }); 
            }   
               

             supprimerImage(img: Image){
               let conf = confirm("Etes-vous sûr ?"); 
               if (conf) this.wtatourService.supprimerImage(img.idImage).subscribe(
                () => { //supprimer image du tableau currentWtatour.images 
                  const index = this.currentWtatour.images.indexOf(img, 0);
                   if (index > -1) {
                     this.currentWtatour.images.splice(index, 1);
                     } 
                    }); 
                    }

}