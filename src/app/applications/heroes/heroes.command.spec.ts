import { TestBed } from '@angular/core/testing';

import { HeroesCommand } from './heroes.command';

describe('HeroesCommand', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const command: HeroesCommand = TestBed.get(HeroesCommand);
    expect(command).toBeTruthy();
  });
});
