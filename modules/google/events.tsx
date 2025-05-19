const CALENDAR_ID = '218f832d2e3e4ce48daca30cd709bcdd2c1b0594225a2eb6c39e88ebbad18718@group.calendar.google.com';
const API_KEY = 'AIzaSyDRvg5A42eGtX5dWItPR4R6EV2Jin45TE0';
const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
export default class Event {
   private event: object
   private constructor(event: object) {
      this.event = event;
   }
   public static async getEvents(): Promise<Event[]> {
      let events = [];
      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`);
      const googleEvents = await response.json()
      for (const event of googleEvents.items) {
         events.push(new Event(event));
      }
      return events;
   }
   public toString(): string {
      return JSON.stringify(this.event);
   }
   public link(): string {
      return this.event.htmlLink;
   }
   public summary(): string {
      return this.event.summary;
   }
   public description(): string | undefined {
      return this.event.description || undefined;
   }
   public startTime(): Date {
      return new Date(this.event.start.dateTime);
   }
   public endTime(): Date | undefined {
      if (this.event.end) {
         return new Date(this.event.end.dateTime);
      } else {
         return undefined;
      }
   }
   public location(): string | undefined {
      return this.event.location;
   }
   public isOld(): boolean {
      const now = Date.now()
      if (Math.abs(this.startTime().getTime() - now) > twoWeeksInMs) {
         return true;
      } else {
         return false;
      }
   }
   //Add methods as needed
}

