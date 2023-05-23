import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDeleteId : EventEmitter<string> = new EventEmitter();

   onDeleteCharacter(id:string = ''):void{
    //TODO Emitir el ID del personaje
    //console.log(i);
    if (id === '')
      return
      
    this.onDeleteId.emit(id);
  }
}
