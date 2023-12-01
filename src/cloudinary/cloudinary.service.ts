import { Injectable } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResponse } from "./cloudinary-response";

@Injectable()
export class CloudinaryService {
  uploadFileFromBuffer(fileBuffer: Buffer): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "image", folder: "Restaurant-Food" }, // Thêm tùy chọn folder
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          },
        )
        .end(fileBuffer);
    });
  }
}
