import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200,
    vertical: true
  };

  constructor() {}

}
