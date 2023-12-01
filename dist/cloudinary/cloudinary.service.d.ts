/// <reference types="node" />
import { CloudinaryResponse } from "./cloudinary-response";
export declare class CloudinaryService {
    uploadFileFromBuffer(fileBuffer: Buffer): Promise<CloudinaryResponse>;
}
