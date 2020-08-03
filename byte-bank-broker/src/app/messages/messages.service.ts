
import {
  PoNotificationService,
  PoNotification,
  PoToasterOrientation,
} from '@po-ui/ng-components';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  constructor(private poNotificationService: PoNotificationService) {}

  showMessageError(message: string) {
    const notification: PoNotification = {
      message,
      orientation: PoToasterOrientation.Bottom,
    };
    this.poNotificationService.error(notification);
  }

  showMessageSucess(message: string) {
    const notification: PoNotification = {
      message,
      orientation: PoToasterOrientation.Bottom,
    };
    this.poNotificationService.success(notification);
  }

  showMessageInfo(message: string) {
    const notification: PoNotification = {
      message,
      orientation: PoToasterOrientation.Bottom,
    };
    this.poNotificationService.information(notification);
  }
}
