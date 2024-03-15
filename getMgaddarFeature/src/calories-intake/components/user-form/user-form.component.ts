import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { exercices } from 'src/calories-intake/entities';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet, RouterLink,NgFor],
})
export class UserFormComponent {
  private readonly userService: UserService = inject(UserService);
  private readonly router: Router = inject(Router);
  exercices = exercices;

  mesure: string = 'kg';
  userForm = new FormGroup({
    height: new FormControl(0),
    weight: new FormControl(0),
    age: new FormControl(0),
    gender: new FormControl('male'),
    exercice: new FormControl(this.exercices[0]),
  })

  changeMesure(mesure: string) {
    this.mesure = mesure;
  }

  onSubmit() {
    this.userService.setUserData(this.userForm, this.mesure);
  }
}
