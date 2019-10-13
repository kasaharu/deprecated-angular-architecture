import { TestBed } from '@angular/core/testing';

import { HeroDetailQuery } from './hero-detail.query';

describe('HeroDetailQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: HeroDetailQuery = TestBed.get(HeroDetailQuery);
    expect(query).toBeTruthy();
  });
});
