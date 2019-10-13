import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { selectStateFromTaskStore } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroSearchQuery {
  constructor(private store$: Store<{}>) {}

  searchTerms$: Observable<string> = selectStateFromTaskStore(this.store$, (state) => state.searchTerms);
  heroes$: Observable<Hero[] | null> = selectStateFromTaskStore(this.store$, (state) => state.searchedHeroes);
}
