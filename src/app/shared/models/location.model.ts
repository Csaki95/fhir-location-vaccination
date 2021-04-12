import { OperationalStatus } from "./enums/_operational-status.enum";
import { Status } from "./enums/_status.enum";
import { Type } from "./enums/_type.enum";
import { Position } from "./interfaces/_position.interface";
import { Mode } from "./enums/_mode.enum";
import { PhysicalType } from "./enums/_physical-type.enum";
import { HoursOfOperation } from "./interfaces/_hours-of-operation.interface";
import { ContactPoint } from "./interfaces/_contactPoint.interface";
import { Address } from "./interfaces/_address.interface";

/*
id - az előírt struktúra helyett az órai egyszerű string megvalósítást használtam
name - az előírás helyett kötelezővé tettem
    FHIR Location szerint egyetlen egy adattag sem kötelező, még id sem, de mivel nem szeretnék üres egyedeket létrehozni, és
    név nélkül még listázni se lehet (értelme sincs), így legalább ennyit módosítottam rajta
*/
export interface Location {
    id?: string,
    status?: Status,
    operationalStatus?: OperationalStatus,
    name: string,
    alias?: string[],
    description?: string,
    mode?: Mode,
    type?: Type,
    telecom?: ContactPoint,
    address?: Address,
    physicalType?: PhysicalType,
    position?: Position,
    managingOrganization?: string,
    partOf?: string,
    hoursOfOperation?: HoursOfOperation
    availabilityExceptions?: string
}
