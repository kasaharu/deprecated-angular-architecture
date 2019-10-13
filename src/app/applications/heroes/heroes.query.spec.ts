import { TestBed } from '@angular/core/testing';

import { HeroesQuery } from './heroes.query';

describe('HeroesQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: HeroesQuery = TestBed.get(HeroesQuery);
    expect(query).toBeTruthy();
  });
});
