import { NgModule } from "@angular/core";
import { CaloriesComponent } from './components/calories/calories.component';
import { BmiFormComponent } from "./components/bmi-form/bmi-form.component";
import { RouterModule, Routes } from "@angular/router";
import { BmiGuard } from "./bmi.guard";

const routes : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calories',
    },
    {
        path: 'form',
        component: BmiFormComponent,
    },
    {
        path: 'calories',
        canActivate: [BmiGuard],
        component: CaloriesComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BmiModule {}