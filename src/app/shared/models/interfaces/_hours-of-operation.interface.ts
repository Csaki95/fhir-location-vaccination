import { DaysOfWeek } from "../enums/_days-of-week.enum";
import { Time } from "./_time.interface";

export interface HoursOfOperation {
    daysOfWeek: DaysOfWeek,
    allDay: boolean,
    openingTime: Time,
    closingTime: Time
}
