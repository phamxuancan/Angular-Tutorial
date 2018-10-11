import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';  
import { Observable } from 'rxjs';
import { MessageService } from '../message.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService,MessageService]
})
export class HeroesComponent implements OnInit {
  heroes;
  selectedHero : Hero;
  constructor(
    private heroservice:HeroService,
    public messageService:MessageService
  ) { }

  ngOnInit() {
this.getHeroes();
  }
  onSelect(hero:Hero){
      this.selectedHero = hero;
  }
  getHeroes(): void {
    
    this.heroservice.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        
  }

}
