import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WtaTourComponent } from './wta-tour/wta-tour.component';
import { AddWtatourComponent } from './add-wtatour/add-wtatour.component';
import { UpdateWtatourComponent } from './update-wtatour/update-wtatour.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParStatComponent } from './recherche-par-stat/recherche-par-stat.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    WtaTourComponent,
    AddWtatourComponent,
    UpdateWtatourComponent,
    RechercheParStatComponent,
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
