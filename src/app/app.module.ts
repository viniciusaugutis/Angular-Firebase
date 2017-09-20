import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
 apiKey: "AIzaSyDKbjgK1HQYQKaikiqAnVtIeliyAKRKzvw",
 authDomain: "utfware2017.firebaseapp.com",
 databaseURL: "https://utfware2017.firebaseio.com",
 projectId: "utfware2017",
 storageBucket: "utfware2017.appspot.com",
 messagingSenderId: "763985891821"
};
firebase.initializeApp(config);

import { AppComponent } from './app.component';
import { WebchatModule } from './webchat/webchat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    WebchatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
