import { TestBed } from '@angular/core/testing';

import { HeroSearchCommand } from './hero-search.command';

describe('HeroSearchCommand', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const command: HeroSearchCommand = TestBed.get(HeroSearchCommand);
    expect(command).toBeTruthy();
  });
});
