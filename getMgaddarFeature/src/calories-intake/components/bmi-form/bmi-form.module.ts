import { NgModule } from '@angular/core';
import { BmiFormComponent } from './bmi-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BmiFormComponent],
  imports: [ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [BmiFormComponent]
})
export class AppModule { }
