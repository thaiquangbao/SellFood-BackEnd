/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
import { Footer } from "src/trangchu.entity/footer";
import { Icons } from "src/trangchu.entity/icons";
export declare class FooterService {
    private footerEntity;
    private iconsEntity;
    constructor(footerEntity: mongoose.Model<Footer>, iconsEntity: mongoose.Model<Icons>);
    findAllFooter(): Promise<Footer[]>;
    insertFooter(footer: Footer): Promise<Footer>;
    findOneFooter(id: string): Promise<Footer>;
    updateFooter(id: string, footer: Footer): Promise<Footer>;
    findAllIcons(): Promise<Icons[]>;
    insertIcons(icons: Icons): Promise<Icons>;
    findOneIcons(id: string): Promise<Icons>;
    updateIcons(id: string, icons: Icons): Promise<Icons>;
    deleteIcons(id: string): Promise<boolean>;
}
