import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WebchatService } from 'app/webchat/webchat.service';

@Component({
  selector: 'webchat-msg',
  templateUrl: './webchat-msg.component.html',
  styleUrls: ['./webchat-msg.component.css']
})
export class WebchatMsgComponent implements OnInit {
  @Input() nick: string;
  messages: any;
  sendMsg: string;

  constructor(private webchatService: WebchatService) { }

  ngOnInit() {
    this.messages = this.webchatService.getMessages();
  }

  onEnter(e: KeyboardEvent) {
    this.webchatService.addMessage(this.nick, this.sendMsg);
    this.sendMsg = "";

    //scroll bottom
    document.body.scrollIntoView(false);
  }
}
