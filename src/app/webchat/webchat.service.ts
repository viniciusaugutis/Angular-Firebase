import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class WebchatService {
  private messages: any = [];

  constructor() { }

  // Listener for all chat messages
  getMessages(): any {
    let self = this;
    firebase.database().ref('chat-msgs').on('child_added', function(snapshot) {
      let msg = snapshot.val();
      self.messages.push(msg);
    });
    return this.messages;
  }

  // Add new message at firebase
  addMessage(nick: string, msg: string): void {
    firebase.database().ref('chat-msgs').push().set({
      nick: nick,
      text: msg
    });
  }
}
