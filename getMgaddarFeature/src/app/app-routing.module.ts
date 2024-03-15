import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiGuard } from 'src/calories-intake/bmi.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [BmiGuard],
  },
  {
    path: 'bmi',
    loadChildren: () => import('../calories-intake/bmi.module').then(m => m.BmiModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }