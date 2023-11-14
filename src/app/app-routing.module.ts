import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WtaTourComponent } from './wta-tour/wta-tour.component';
import { AddWtatourComponent } from './add-wtatour/add-wtatour.component';
import { UpdateWtatourComponent } from './update-wtatour/update-wtatour.component';
import { RechercheParStatComponent } from './recherche-par-stat/recherche-par-stat.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
const routes: Routes = [
  {path: "wtaTour", component : WtaTourComponent},
  {path: "add-wtaTour", component : AddWtatourComponent},
  {path: "update-wtaTour/:id", component: UpdateWtatourComponent},
  {path: "", redirectTo: "/wtaTour", pathMatch: "full" },
  {path: 'wtatour', component: WtaTourComponent },
  {path: "rechercheParStat", component : RechercheParStatComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
