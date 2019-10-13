import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeroAdapter } from '../../infrastructures/hero.adapter';
import { Actions as HeroStoreActions } from '../../store/hero-store';

@Injectable({
  providedIn: 'root',
})
export class HeroSearchCommand {
  constructor(private store$: Store<{}>, private heroAdapter: HeroAdapter) {}

  changeSearchTerms(searchTerms: string) {
    // TODO: キーストロークから検索まで 300ms 待機する
    // TODO: 直前の検索語と同じ場合は検索しない
    this.store$.dispatch(HeroStoreActions.changeSearchTerms({ searchTerms }));
    this.heroAdapter.searchHeroes(searchTerms).subscribe((heroes) => {
      this.store$.dispatch(HeroStoreActions.saveSearchedHeroes({ heroes }));
    });
  }
}
