import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';


@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
@Component ({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
              <nav>                
                    <a [routerLink]='["Dashboard"]'>Tablero</a>
                    <a [routerLink]='["Heroes"]'>Heroes</a>
              </nav>
              <router-outlet></router-outlet>`,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})
export class AppComponent{
    title = 'Tour de heroes'
}