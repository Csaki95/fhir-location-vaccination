import { ContactSystem } from "../enums/_contactSystem.enum";
import { ContactUse } from "../enums/_contactUse.enum";
import { Period } from "./_period.interface";

export interface ContactPoint {
    system?: ContactSystem,
    value?: string,
    use?: ContactUse,
    rank?: number,
    period?: Period
}
