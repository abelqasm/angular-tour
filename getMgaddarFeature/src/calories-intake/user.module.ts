import { NgModule } from "@angular/core";
import { CaloriesComponent } from './components/calories/calories.component';
import { UserFormComponent } from "./components/user-form/user-form.component";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from "./user.guard";
import { BmiComponent } from './components/bmi/bmi.component';
import { ContainerComponent } from "./components/container/container.component";
import { MacroComponent } from './components/macro/macro.component';

const routes : Routes = [
    {
        path: '',
        component: UserFormComponent,
        children: [
            {
                path: 'val',
                component: ContainerComponent,
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
                        
                    },
                    {
                        path: 'macro',
                        canActivate: [UserGuard],
                        component: MacroComponent,
                    }
                ]
            }]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
  ],
})
export class UserModule {}