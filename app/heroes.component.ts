import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router-deprecated'; 

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

@Component({   
    selector: 'my-heroes',  
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

/** HeroesComponent clase principal */
export class HeroesComponent implements OnInit 
{  
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private router: Router,
        private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
 } 
}
 