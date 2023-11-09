import { INotificationError } from "../contracts";

export class NotificationError extends Error {
  constructor(public errors: INotificationError[]) {
    super(errors.map(error => `${error.context}: ${error.message}`).join(", "));
  }
}