import { TestBed } from '@angular/core/testing';

import { HeroSearchQuery } from './hero-search.query';

describe('HeroSearchQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: HeroSearchQuery = TestBed.get(HeroSearchQuery);
    expect(query).toBeTruthy();
  });
});
