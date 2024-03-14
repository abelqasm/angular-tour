import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      new Hero(1, 'spider-man'),
      new Hero(2, 'super-man'),
      new Hero(3, 'bat-man'),
      new Hero(5, 'speed'),
      new Hero(9, 'venom'),
      new Hero(11, 'zeus'),
      new Hero(16, 'neptune'),
      new Hero(18, 'napoleon'),
  ];
  return heroes;
  }
}
