const CALENDAR_ID = 'ffa25ea10931fae9b892cee1b73d3b6108b2dd97f4da80e95630965feee2a052@group.calendar.google.com';
const API_KEY = 'AIzaSyDv-gvOybUMHDMDKtkNgivf7rL8dfgYCCU';
const twoWeeksInMs = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
const lineLength = 50;
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
      events.sort((a, b) => {
         if (a.startTime().getTime() < b.startTime().getTime()) {
            return -1;
         }
         return 1;
      });
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
      let formattedDescription = "";
      let hold = this.event.description;
      const MAX_LINES = 3;
      if (hold) {
         if (hold.length < lineLength) {
            let diff = lineLength - hold.length;
            formattedDescription = hold;
            while (diff > 0) {
               formattedDescription += " ";
               diff--;
            }
         } else {
            let lines = 1;
            while (hold.length > 0) {
               formattedDescription += hold.substring(0, lineLength) + '\n';
               hold = hold.substring(lineLength).trim();
               lines++;
               if(lines > MAX_LINES) break;
            }
         }
      }
      return formattedDescription || undefined;
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
      if(this.event.location) {
         if(this.event.location.length > lineLength - 15) {
            return this.event.location.substring(0,lineLength - 15);
         }
      }
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

