import { Component, OnInit } from '@angular/core';
import { HeroSearchCommand } from '../../applications/hero-search/hero-search.command';
import { HeroSearchQuery } from '../../applications/hero-search/hero-search.query';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  constructor(private query: HeroSearchQuery, private command: HeroSearchCommand) {}

  heroes$ = this.query.heroes$;
  searchTerms = this.query.searchTerms$;

  ngOnInit(): void {}

  search(term: string): void {
    this.command.changeSearchTerms(term);
  }
}
