import { Injectable, inject } from "@angular/core";
import { BmiService } from "./bmi.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BmiGuard {
    private bmi: BmiService = inject(BmiService);
    private readonly router: Router = inject(Router);
    
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) : boolean | Observable<boolean>{
        return this.bmi.getBmi().pipe(map((state) =>{
            if (!state) {
                this.router.navigate(['/bmi/form']);
                return false;
            }
            this.router.navigate(['/bmi/calories'])
            return true;
        }))
    }
}