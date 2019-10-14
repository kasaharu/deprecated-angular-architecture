import { TestBed } from '@angular/core/testing';

import { HeroDetailCommand } from './hero-detail.command';

describe('HeroDetailCommand', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const command: HeroDetailCommand = TestBed.get(HeroDetailCommand);
    expect(command).toBeTruthy();
  });
});
