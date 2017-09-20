import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webchat',
  templateUrl: './webchat.component.html',
  styleUrls: ['./webchat.component.css']
})
export class WebchatComponent implements OnInit {
  nickname: string = "";
  constructor() { }

  ngOnInit() {
  }

  continueWithNickname(nick: string): void {
    this.nickname = nick;
  }

  onKeyUp(e: KeyboardEvent): void {
    //console.log((<HTMLInputElement>e.target).value);
  }

}
