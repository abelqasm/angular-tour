import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserData, UserForm, exercices } from "./entities";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private State: boolean = false;
    private userData: UserData={
        height: 0,
        weight: 0,
        age: 0,
        mesure: '',
        exercice: '',
        gender: '',
    };

    getUserData(): Observable<UserData> {
        return of(this.userData);
    }

    getUserState(): Observable<boolean> {
        return of(this.State);
    }

    setUserData(user: UserForm, mesure: string) {
        this.userData.age = user.value.age;
        this.userData.height = user.value.height;
        this.userData.weight = user.value.weight;
        this.userData.exercice = user.value.exercice;
        this.userData.gender = user.value.gender;
        this.userData.mesure = mesure;
        this.State = true;
    }

    getBmi(): number{
        let bmi: number;
        const weight = Number(this.userData.weight);
        const height= Number(this.userData.height);
        console.log(weight, height)
        if (this.userData.mesure === 'kg'){
            bmi = Math.round(weight / Math.pow((height / 100) ,2));
        }
        else {
            bmi = 703 * weight / Math.pow((height / 100) , 2)
        }
        return bmi;
    }

    getCategorie(bmi: number): string {
        if (bmi < 16) return 'Severe Thinness'
        if (bmi < 17) return 'Moderate Thinness'
        if (bmi < 18.5) return 'Mild Thinness'
        if (bmi < 25) return 'Noarmal weight'
        if (bmi < 30) return 'Overweight'
        if (bmi < 35) return 'Obese Class I'
        if (bmi < 40) return 'Obese Class II'
        return 'Obese Class III'
    }
    getCalories(): number {
        let bmr: number;
        const caloriesCalc: number[] = [1.2, 1.375, 1.55, 1.725, 1.9];
        const fact: number = caloriesCalc[exercices.indexOf(this.userData.exercice!)];
        const weight = Number(this.userData.weight);
        const height= Number(this.userData.height);
        const age= Number(this.userData.age);
        const genderCalculator = this.userData.gender === 'male' ? 5 : -161;
        if (this.userData.mesure === 'kg'){
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + genderCalculator;
        }
        else {
            bmr =(4.536  * weight) + (15.88 * height) - (5 * age) + genderCalculator;
        }
        return bmr * fact;
    }

    resetUserData() {
        this.userData.age = 0;
        this.userData.height = 0;
        this.userData.weight = 0;
        this.userData.mesure = '';
        this.State = false;
    }
}
