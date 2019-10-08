import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { addHero as HeroStoreActionAddHero, saveHeroes as HeroStoreActionSaveHeroes, selectStateFromTaskStore } from '../store/hero-store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]> = selectStateFromTaskStore(this.store$, (state) => state.heroes);

  constructor(private store$: Store<{}>, private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.store$.dispatch(HeroStoreActionSaveHeroes({ heroes }));
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.store$.dispatch(HeroStoreActionAddHero({ hero }));
    });
  }

  delete(hero: Hero): void {
    // this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
