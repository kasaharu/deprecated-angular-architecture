import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { selectStateFromHeroStore } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroSearchQuery {
  constructor(private store$: Store<{}>) {}

  searchTerms$: Observable<string> = selectStateFromHeroStore(this.store$, (state) => state.searchTerms);
  heroes$: Observable<Hero[] | null> = selectStateFromHeroStore(this.store$, (state) => state.searchedHeroes);
}
