import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroesQuery } from '../../applications/heroes/heroes.query';
import { Hero } from '../../hero';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private store$: Store<{}>, private query: HeroesQuery, private heroService: HeroAdapter) {}
  heroes$ = this.query.heroes$;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.store$.dispatch(HeroStoreActions.saveHeroes({ heroes }));
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.store$.dispatch(HeroStoreActions.addHero({ hero }));
    });
  }

  delete(hero: Hero): void {
    this.store$.dispatch(HeroStoreActions.deleteHero({ hero }));
    // this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
