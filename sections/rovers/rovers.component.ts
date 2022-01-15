import { Component } from '@angular/core';

@Component({
  selector: 'page-rovers',
  templateUrl: './rovers.component.html',
  styleUrls: ['./rovers.component.scss'],
})

export class RoversComponent { 
    constructor(){
        console.log('hola - desde el rover');
    }
}