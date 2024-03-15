import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  standalone: true,
  imports: [RouterModule, NgFor],
})
export class CaloriesComponent {
  private readonly userService: UserService = inject(UserService);
  calories = this.userService.getCalories();
  weightAdvices = [
    {weight: 'Weight loss', val: Math.round(this.calories * 0.79)},
    {weight: 'Mild weight loss', val: Math.round(this.calories * 0.9)},
    {weight: 'Maintain weight', val: Math.round(this.calories * 1)},
    {weight: 'Gain weight', val: Math.round(this.calories * 1.1)},
    {weight: 'Hard gain weight', val: Math.round(this.calories * 1.21)},
  ] 
}
