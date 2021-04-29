import { AddressType } from "../enums/_addressType.enum";
import { AddressUse } from "../enums/_addressUse.enum";

export interface Address {
    use?: AddressUse,
    type?: AddressType,
    line?: string,
    city?: string,
    postalCode?: string,
    country?: string,
}