import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WtaTourComponent } from './wta-tour/wta-tour.component';
import { AddWtatourComponent } from './add-wtatour/add-wtatour.component';
import { UpdateWtatourComponent } from './update-wtatour/update-wtatour.component';
import { RechercheParStatComponent } from './recherche-par-stat/recherche-par-stat.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListStatComponent } from './list-stat/list-stat.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { WtaTourGuard } from './wta-tour.guard';
const routes: Routes = [
  {path: "wtaTour", component : WtaTourComponent},
  {path: "add-wtaTour", component : AddWtatourComponent, canActivate:[WtaTourGuard]},
  {path: "update-wtaTour/:id", component: UpdateWtatourComponent},
  {path: "", redirectTo: "/wtaTour", pathMatch: "full" },
  {path: 'wtatour', component: WtaTourComponent },
  {path: "rechercheParStat", component : RechercheParStatComponent},
  {path: "liststat",component: ListStatComponent},
  {path: "login",component:LoginComponent},
  {path: "forbidden",component:ForbiddenComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
