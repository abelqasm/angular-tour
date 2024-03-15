import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  standalone: true,
  imports: [NgFor]
})
export class MacroComponent {
  private readonly userService: UserService = inject(UserService);
  calories: number = this.userService.getCalories();
  macros = [
    {macro :'carbs',val: 4, coef: 35},
    {macro: 'fats',val: 9, coef: 35},
    {macro: 'proteins',val: 4, coef: 30},
  ]
  onClick(value: string){
    if (value === 'high'){
      this.macros[0].coef = 50;
      this.macros[1].coef = 20;
      this.macros[2].coef = 30;
    }
    else if (value === 'low'){
      this.macros[0].coef = 20;
      this.macros[1].coef = 40;
      this.macros[2].coef = 40;
    }
    else {
      this.macros[0].coef = 35;
      this.macros[1].coef = 35;
      this.macros[2].coef = 30;
    }
  }
}
