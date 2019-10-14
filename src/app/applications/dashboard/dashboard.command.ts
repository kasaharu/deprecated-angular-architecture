import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class DashboardCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  async getHeroes(): Promise<void> {
    const heroes = await this.heroAdapter.getHeroes().toPromise();
    this.store$.dispatch(HeroStoreActions.saveHeroes({ heroes }));
  }
}
