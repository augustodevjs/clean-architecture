import { IEvent, IEventDispatcher, IEventHandler } from "../contracts";

export class EventDispatcher implements IEventDispatcher {
  private eventHandlers: { [eventName: string]: IEventHandler[] } = {};

  get getEventHandlers(): { [eventName: string]: IEventHandler[] } {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }

    this.eventHandlers[eventName].push(eventHandler);
  }

  unregister(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (this.eventHandlers[eventName]) {
      const index = this.eventHandlers[eventName].indexOf(eventHandler);

      if (index !== 1) {
        this.eventHandlers[eventName].splice(index, 1)
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }

  notify(event: IEvent): void {
    const eventName = event.constructor.name;
    const eventHandlersEvent = this.eventHandlers[eventName];

    if (eventHandlersEvent) {
      eventHandlersEvent.forEach(eventHandler => {
        eventHandler.handle(event);
      });
    }
  }
}