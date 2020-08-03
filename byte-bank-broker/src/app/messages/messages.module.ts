import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';

@NgModule({
  providers: [MessagesService],
  imports: [CommonModule],
})
export class MessagesModule {}
