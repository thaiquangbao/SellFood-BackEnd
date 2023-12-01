import { Injectable } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResponse } from "./cloudinary-response";

@Injectable()
export class CloudinaryService {
  uploadFile(filePath: string): Promise<CloudinaryResponse> {
    return new Promise<CloudinaryResponse>((resolve, reject) => {
      cloudinary.uploader.upload(
        filePath,
        { folder: "Restaurant-Food" },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        },
      );
    });
  }
}
