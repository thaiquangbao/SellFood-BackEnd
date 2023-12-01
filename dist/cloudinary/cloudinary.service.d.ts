import { CloudinaryResponse } from "./cloudinary-response";
export declare class CloudinaryService {
    uploadFile(filePath: string): Promise<CloudinaryResponse>;
}
