import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stats } from '../model/stat.model';

@Component({
  selector: 'app-update-stat',
  templateUrl: './update-stat.component.html',
  styleUrls: ['./update-stat.component.css']
})
export class UpdateStatComponent {

  @Input()
  stats! : Stats;

  @Input()
  ajout!:boolean;

  @Output()
  statUpdated = new EventEmitter<Stats>();
  
  constructor(){

  }
ngOnInit(): void {
console.log("ngOnInit du composant UpdateStat ",this.stats);
}
saveStat(){
  this.statUpdated.emit(this.stats);
}
}
