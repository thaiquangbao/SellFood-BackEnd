/// <reference types="node" />
import { CloudinaryResponse } from "./cloudinary-response";
export declare class CloudinaryService {
    uploadFileFromBuffer(fileBuffer: Buffer): Promise<CloudinaryResponse>;
    deleteImage(publicId: string): Promise<CloudinaryResponse>;
    deleteAllImg(imgs: string[]): Promise<void>;
}
