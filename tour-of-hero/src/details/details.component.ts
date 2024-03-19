import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common'
import { Hero, heroes } from '../models/heroes';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  hero?: Hero;
  constructor(private location: Location, private heroService: HeroService){}
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    this.heroService.getHero(Number(this.route.snapshot.params['id']))
          .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
