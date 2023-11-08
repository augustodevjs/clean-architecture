import { IEvent } from "./IEvent";
import { IEventHandler } from "./IEventHandler";

export interface IEventDispatcher {
  unregisterAll(): void;
  notify(event: IEvent): void;
  register(eventName: string, eventHandler: IEventHandler): void;
  unregister(eventName: string, eventHandler: IEventHandler): void;
}