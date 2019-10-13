import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../../hero';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroesCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  getHeroes(): void {
    this.heroAdapter.getHeroes().subscribe((heroes) => {
      this.store$.dispatch(HeroStoreActions.saveHeroes({ heroes }));
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroAdapter.addHero({ name } as Hero).subscribe((hero) => {
      this.store$.dispatch(HeroStoreActions.addHero({ hero }));
    });
  }

  delete(hero: Hero): void {
    this.store$.dispatch(HeroStoreActions.deleteHero({ hero }));
    this.heroAdapter.deleteHero(hero).subscribe();
  }
}
