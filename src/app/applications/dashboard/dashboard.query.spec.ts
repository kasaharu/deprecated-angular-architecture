import { TestBed } from '@angular/core/testing';

import { DashboardQuery } from './dashboard.query';

describe('DashboardQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const query: DashboardQuery = TestBed.get(DashboardQuery);
    expect(query).toBeTruthy();
  });
});
