import { TestBed } from '@angular/core/testing';

import { DashboardCommand } from './dashboard.command';

describe('DashboardCommand', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const command: DashboardCommand = TestBed.get(DashboardCommand);
    expect(command).toBeTruthy();
  });
});
