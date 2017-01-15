// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private oHeroService: HeroService,
    private oRoute: ActivatedRoute,
    private oLocation: Location
  ) {}

  ngOnInit(): void {
    this.oRoute.params
        .switchMap((params: Params) => this.oHeroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.oLocation.back();
  }

  save(): void{
    this.oHeroService.update(this.hero)
      .then(() => this.goBack());
  }

}