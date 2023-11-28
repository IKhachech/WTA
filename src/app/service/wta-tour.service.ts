import { Injectable } from '@angular/core';
import { WtaTour } from '../model/wta-tour.model';
import { Stats } from "../model/stat.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatWrapper } from '../model/statWrapped.model';
import { AuthService } from '../auth.service';
import { apiURL } from 'config';
import { Image } from '../model/image.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
providedIn: 'root'
})
export class WtaTourService {

  apiURL: string = 'http://localhost:8085/spring01/api';
  apiURLSt: string = 'http://localhost:8085/spring01/st';

  tour! : WtaTour;
  wtatour!: WtaTour[];

  stats!: Stats[];
  constructor(private http : HttpClient,private authService :AuthService) {

   
    
    /*this.stat=[
      {id_stat: 1, name_player: "Coco Gauff",nationality:"USA",ranking:3,titles_won:3 },
      {id_stat: 2, name_player: "Aryana Sabalenka",nationality:"BLR",ranking:1,titles_won:12 },
      {id_stat: 3, name_player: "Iga Swiatek",nationality:"POL",ranking:2,titles_won:16}
  
    ]*/
   /*this.wtatour = [
      { 
        idTour: 1, 
        courtSurface: "Clay", 
        dotation: 3000.60, 
        dateTour: new Date("01/14/2011"), 
        nameTour: "Roland Garros", 
        winner: "Iga Swiatek", 
        stats: {idStat: 1, namePlayer: "Iga Swiatek", nationality: "POL", ranking: 2, titlesWon: 16}
      },
      { 
        idTour: 2, 
        courtSurface: "Hard", 
        dotation: 2500.75, 
        dateTour: new Date("02/20/2011"), 
        nameTour: "US Open", 
        winner: "Coco Gauff", 
        stats: {idStat: 2, namePlayer: "Coco Gauff", nationality: "POL", ranking: 3, titlesWon: 6}
      },
      { 
        idTour: 3, 
        courtSurface: "Grass", 
        dotation: 4000.90, 
        dateTour: new Date("03/25/2011"), 
        nameTour: "Australian Open", 
        winner: "Aryana Sabalenka", 
        stats: {idStat: 3, namePlayer: "Aryana Sabalenka", nationality: "BLR", ranking: 1, titlesWon: 12}
      }
    ];*/
  } 

  //listStat():Observable<Stats[]>{
    //return this.http.get<Stats[]>(this.apiURL+"/st");
    //}

    listStat(): Observable<StatWrapper> {
      let jwt = this.authService.getToken(); 
      jwt = "Bearer "+jwt; 
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.get<StatWrapper>(this.apiURLSt,{headers:httpHeaders} );   }

  listWtaTour(): Observable<WtaTour[]> {
    //let jwt = this.authService.getToken();
    //jwt = "Bearer "+jwt;
    //let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<WtaTour[]>(this.apiURL+"/all");  }

trierWtaTour(){
  this.wtatour = this.wtatour.sort((n1,n2) => {
  if (n1.idTour! > n2.idTour!) {
  return 1;
  }
  if (n1.idTour! < n2.idTour!) {
  return -1;
  }
  return 0;
  });
  }

addWtaTour( wt: WtaTour):Observable<WtaTour>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt; 
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.post<WtaTour>(this.apiURL+"/addprod", wt, {headers:httpHeaders});
  }

  rechercherParStat(idStat: number):Observable< WtaTour[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt; 
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.apiURL}/prodscat/${idStat}`;
    return this.http.get<WtaTour[]>(url,{headers:httpHeaders});
    }
    //consulterStat(id:number): Stat{
    //return this.stat.find(st => st.id_stat == id)!;
    //}

  consulterWtaTour(id: number): Observable<WtaTour> { 
    const url = `${this.apiURL}/getbyid/${id}`;
     let jwt = this.authService.getToken();
     jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get<WtaTour>(url,{headers:httpHeaders});
 }

  suppWtaTour(id : number) {
    const url = `${this.apiURL}/delprod/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
    return this.http.delete(url, {headers:httpHeaders});
    }


    updateWtaTour(wt :WtaTour) : Observable<WtaTour> { 
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<WtaTour>(this.apiURL+"/updateprod", wt, {headers:httpHeaders}); }

 
      rechercherParNom(name: string):Observable< WtaTour[]> {
        const url = `${this.apiURL}/prodsByName/${name}`;
        return this.http.get<WtaTour[]>(url);
        }
        
        ajouterStat( st: Stats):Observable<Stats>{
          return this.http.post<Stats>(this.apiURLSt, st, httpOptions);
          }

    uploadImage(file: File, filename: string): Observable<Image>{
     const imageFormData = new FormData();
     imageFormData.append('image', file, filename); 
     const url = `${apiURL + '/image/upload'}`;
     return this.http.post<Image>(url, imageFormData);
     }

     
    loadImage(id: number): Observable<Image> {
      const url = `${apiURL + '/image/get/info'}/${id}`; 
      return this.http.get<Image>(url); 
    }

    uploadImageTour(file: File, filename: string, idTour:number): 
    Observable<any>{ const imageFormData = new FormData();
       imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/uplaodImageTour'}/${idTour}`; 
        return this.http.post(url, imageFormData); }

    supprimerImage(id : number) { 
      const url = `${this.apiURL}/image/delete/${id}`;
       return this.http.delete(url, httpOptions); }

}


