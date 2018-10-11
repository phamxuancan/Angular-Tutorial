import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero;
  constructor( private messageService:MessageService) { }

  ngOnInit() {
    console.log(this.messageService.messages);
  }

}
