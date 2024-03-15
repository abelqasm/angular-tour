import { NgModule } from "@angular/core";
import { CaloriesComponent } from './components/calories/calories.component';
import { UserFormComponent } from "./components/user-form/user-form.component";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from "./user.guard";
import { BmiComponent } from './components/bmi/bmi.component';

const routes : Routes = [
    {
        path: '',
        component: UserFormComponent,
        children: [
            {
                path: 'bmi',
                canActivate: [UserGuard],
                component: BmiComponent,
            },
            {
                path: 'calories',
                canActivate: [UserGuard],
                component: CaloriesComponent,

        }]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class UserModule {}