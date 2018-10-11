import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor( private messageService:MessageService) { }

  ngOnInit() {
    console.log(this.messageService.messages);
  }

}
