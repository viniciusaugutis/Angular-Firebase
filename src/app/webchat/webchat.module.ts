import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebchatComponent } from './webchat.component';
import { WebchatService } from './webchat.service';
import { FormsModule } from '@angular/forms';
import { WebchatMsgComponent } from './webchat-msg/webchat-msg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [WebchatComponent, WebchatMsgComponent],
  providers: [ WebchatService ],
  exports: [
    WebchatComponent
  ]
})
export class WebchatModule { }
