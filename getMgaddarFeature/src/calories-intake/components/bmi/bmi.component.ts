import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/calories-intake/user.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  standalone: true,
  imports: [RouterModule],
})
export class BmiComponent {
  private readonly userService: UserService = inject(UserService);
  bmi: number = this.userService.getBmi();
  categorie:string = this.userService.getCategorie(this.bmi);

}
