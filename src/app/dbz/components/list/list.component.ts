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
  onDeleteId : EventEmitter<number> = new EventEmitter();

   onDeleteCharacter(index:number):void{
    //TODO Emitir el ID del personaje
    console.log(index);
    this.onDeleteId.emit(index);
  }
}
