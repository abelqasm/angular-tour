import { Component } from '@angular/core';
import { Hero, heroes } from '../models/heroes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heros?: Hero[];
  constructor(private heroService: HeroService) {}
  ngOnInit() {
    this.getTopHeroes();
  }
  getTopHeroes(){
    this.heroService.getTopHeroes().subscribe(heroes => this.heros = heroes);
  }
}
