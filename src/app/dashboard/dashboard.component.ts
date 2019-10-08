import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { saveHeroes as HeroStoreActionSaveHeroes } from '../store/hero-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private store$: Store<{}>, private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
      this.store$.dispatch(HeroStoreActionSaveHeroes({ heroes }));
    });
  }
}
