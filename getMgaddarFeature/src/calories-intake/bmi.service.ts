import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BmiService {
    private State: boolean = false;

    getBmi(): Observable<boolean> {
        return of(this.State);
    }

    setBmi() {
        this.State = true;
    }

    resetBmi() {
        this.State = false;
    }
}