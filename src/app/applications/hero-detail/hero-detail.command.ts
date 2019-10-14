import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  async getHero(id: number): Promise<void> {
    const hero = await this.heroAdapter.getHero(id).toPromise();
    this.store$.dispatch(HeroStoreActions.selectHero({ hero }));
  }
}
