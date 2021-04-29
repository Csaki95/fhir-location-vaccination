import { OperationalStatus } from "./enums/_operational-status.enum";
import { Status } from "./enums/_status.enum";
import { Type } from "./enums/_type.enum";
import { PhysicalType } from "./enums/_physical-type.enum";
import { Address } from "./interfaces/_address.interface";
import { ContactSystem } from "./enums/_contactSystem.enum";
import { ContactUse } from "./enums/_contactUse.enum";

export interface Location {
    id?: string,
    status?: Status,
    operationalStatus?: OperationalStatus,
    name: string,
    description?: string,
    type?: Type,
    contactSystem?: ContactSystem,
    contactValue?: string,
    contactUse?: ContactUse
    address?: Address,
    physicalType?: PhysicalType,
    managingOrganization?: string,
    partOf?: string,
}
