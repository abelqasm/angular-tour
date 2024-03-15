import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
})
export class BmiFormComponent {
  mesure: string = 'kg';
  bmiForm = new FormGroup({
    height: new FormControl(0),
    weight: new FormControl(0),
    age: new FormControl(0),
  })
  changeMesure(mesure: string) {
    this.mesure = mesure;
  }
  onSubmit() {
    console.log('form')
  }
}
