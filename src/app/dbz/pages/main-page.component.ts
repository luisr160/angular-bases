import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor(private dbzService:DBZService){

    }

    get characters():Character[]{
        return [...this.dbzService.characters];
    }

    onCharacterDelete(id:string):void{
        this.dbzService.deleteCharacterByID(id);
    }

    onNewCharacter(character:Character){
        this.dbzService.AddCharacter(character);
    }
}