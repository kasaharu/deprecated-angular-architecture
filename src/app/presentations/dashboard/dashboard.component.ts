import { Component, OnInit } from '@angular/core';
import { DashboardCommand } from '../../applications/dashboard/dashboard.command';
import { DashboardQuery } from '../../applications/dashboard/dashboard.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private query: DashboardQuery, private command: DashboardCommand) {}
  heroes$ = this.query.heroes$;

  ngOnInit() {
    this.command.getHeroes();
  }
}
