import { Notification } from "../../../domain";

export abstract class BaseEntity {
  protected _id: string;
  public notification: Notification;

  protected constructor() {
    this.notification = new Notification();
  }

  get id(): string {
    return this._id;
  }
}