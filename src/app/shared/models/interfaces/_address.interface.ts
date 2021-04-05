import { AddressType } from "../enums/_addressType.enum";
import { AddressUse } from "../enums/_addressUse.enum";
import { Period } from "./_period.interface";

export interface Address {
    use?: AddressUse,
    type?: AddressType,
    text?: string,
    line?: string,
    city?: string,
    district?: string,
    state?: string,
    postalCode?: string,
    country?: string,
    period?: Period
}