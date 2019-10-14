import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../../domain/hero';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroesCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  async getHeroes(): Promise<void> {
    const heroes = await this.heroAdapter.getHeroes().toPromise();
    this.store$.dispatch(HeroStoreActions.saveHeroes({ heroes }));
  }

  async add(name: string): Promise<void> {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = await this.heroAdapter.addHero({ name } as Hero).toPromise();
    this.store$.dispatch(HeroStoreActions.addHero({ hero }));
  }

  delete(hero: Hero): void {
    this.store$.dispatch(HeroStoreActions.deleteHero({ hero }));
    this.heroAdapter.deleteHero(hero).subscribe();
  }
}
