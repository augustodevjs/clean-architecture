import { INotificationError } from "../contracts";

export class Notification {
  private errors: INotificationError[] = [];

  addError(error: INotificationError) {
    this.errors.push(error);
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): INotificationError[] {
    return this.errors;
  }

  messages(context?: string): string {
    let message = "";
    this.errors.forEach((error) => {
      if (context === undefined || error.context === context) {
        message += `${error.context}: ${error.message},`;
      }
    });
    return message;
  }
}
