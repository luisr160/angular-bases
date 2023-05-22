import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
        <h3>Counter: {{counter}}</h3>

        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
        
    `
})

export class CounterComponent {
    constructor() { }

    public counter:number = 10;

    increaseBy(byNumber:number):void{
      this.counter += byNumber;
    }
  
    resetCounter():void{
      this.counter = 10;
    }

    
}