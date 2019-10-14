import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailCommand } from '../../applications/hero-detail/hero-detail.command';
import { HeroDetailQuery } from '../../applications/hero-detail/hero-detail.query';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private command: HeroDetailCommand,
    private query: HeroDetailQuery,
  ) {}

  hero$ = this.query.selectedHero$;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.command.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // TODO: 実装
    // this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
