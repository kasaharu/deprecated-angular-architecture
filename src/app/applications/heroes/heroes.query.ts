import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { selectStateFromTaskStore } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroesQuery {
  constructor(private store$: Store<{}>) {}
  heroes$: Observable<Hero[]> = selectStateFromTaskStore(this.store$, (state) => state.heroes);
}
