import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  getHero(id: number): void {
    this.heroAdapter.getHero(id).subscribe((hero) => {
      this.store$.dispatch(HeroStoreActions.selectHero({ hero }));
    });
  }
}
