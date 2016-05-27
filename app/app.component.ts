import { Component } from '@angular/core';  

export class Hero {
  id: number;
  name: string;
}

@Component({   
  selector: 'my-app',  
  template: `<h1>{{title}}</h1>             
             <h2>Mis heroes<h2>
             <ul class="heroes">
                <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
             </ul>            
             `,
    styles:[`
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .heroes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .heroes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .heroes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .heroes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .heroes .text {
                position: relative;
                top: -3px;
            }
            .heroes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
          `]

})

/** AppComponent clase principal */
export class AppComponent 
{  
  title = "Tour de héroes";
  public heroes = HEROES;  
  //hero: Hero = { id: 1, name: "IceStringStorm"};
 } 
 
/** Lista de heroes */
var HEROES: Hero[] = [
    {"id":11, "name":"Alice"},
    {"id":12, "name":"Ashe"},
    {"id":13, "name":"Raze"},
    {"id":14, "name":"Attor"},
    {"id":15, "name":"Garen"},
    {"id":16, "name":"Vi"},
    {"id":17, "name":"Tristana"},
    {"id":18, "name":"Flesh"},
    {"id":19, "name":"Yasuo"},
    {"id":20, "name":"JorEl"}
  ];