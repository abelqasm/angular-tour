import { Injectable } from '@angular/core';
import { Hero, heroes } from '../models/heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient,private messageService: MessageService) { }
  private heroesUrl = 'api/heroes';
  getHeroes() : Observable<Hero[]> {
    const heros = of(heroes);
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero []>(this.heroesUrl);
  }
  getTopHeroes() : Observable<Hero[]> {
    const heros = heroes.slice(heroes.length - 5);
    this.messageService.add('HeroService: fetched Top heroes');
    return of(heros);
  }
  getHero(id: number): Observable<Hero> {
    const hero = heroes.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched get single Hero');
    return of(hero);
  }
} 
