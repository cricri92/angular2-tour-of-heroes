import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: ` <div *ngIf="hero">
                    <h2>Detalles del heroe {{hero.name}}</h2>
                    <div><label>Nº </label>{{hero.id}}</div>
                    <div>
                        <label>Nombre: </label>
                        <input [(ngModel)]="hero.name" placeholder="Nombre"/>
                    </div>
                </div>`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;  
}