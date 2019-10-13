import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../domain/hero';
import { HeroAdapter } from '../infrastructures/hero.adapter';
import { Actions as HeroStoreActions, selectStateFromTaskStore } from '../store/hero-store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]> = selectStateFromTaskStore(this.store$, (state) => {
    if (state.heroes === null) {
      return state.heroes;
    }
    return state.heroes.slice(1, 5);
  });

  constructor(private store$: Store<{}>, private heroService: HeroAdapter) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.store$.dispatch(HeroStoreActions.saveHeroes({ heroes }));
    });
  }
}
