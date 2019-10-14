import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { selectStateFromHeroStore } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class DashboardQuery {
  constructor(private store$: Store<{}>) {}

  heroes$: Observable<Hero[]> = selectStateFromHeroStore(this.store$, (state) => {
    if (state.heroes === null) {
      return state.heroes;
    }
    return state.heroes.slice(1, 5);
  });
}
