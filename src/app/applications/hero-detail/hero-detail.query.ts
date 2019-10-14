import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { selectStateFromHeroStore } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailQuery {
  constructor(private store$: Store<{}>) {}

  selectedHero$: Observable<Hero | null> = selectStateFromHeroStore(this.store$, (state) => state.selectedHero);
}
