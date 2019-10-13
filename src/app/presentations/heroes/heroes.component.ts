import { Component, OnInit } from '@angular/core';
import { HeroesCommand } from '../../applications/heroes/heroes.command';
import { HeroesQuery } from '../../applications/heroes/heroes.query';
import { Hero } from '../../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(private query: HeroesQuery, private command: HeroesCommand) {}
  heroes$ = this.query.heroes$;

  ngOnInit() {
    this.command.getHeroes();
  }

  add(name: string): void {
    this.command.add(name);
  }

  delete(hero: Hero): void {
    this.command.delete(hero);
  }
}
