import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service'

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['hero.css'],
  providers: [HeroService]
})

export class AppComponent {
    title = 'Tour of Heroes';
}