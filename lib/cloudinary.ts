import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadImage(file: string, folder = "godstime") {
  return cloudinary.uploader.upload(file, {
    folder,
    resource_type: "image",
    transformation: [
      { width: 1600, crop: "limit" },
      { fetch_format: "auto", quality: "auto:good" },
    ],
  });
}

export async function deleteImage(publicId: string) {
  return cloudinary.uploader.destroy(publicId);
}

export function cloudinaryResponsiveUrl(publicId: string) {
  return cloudinary.url(publicId, {
    secure: true,
    fetch_format: "auto",
    quality: "auto:good",
    width: "auto",
    dpr: "auto",
    crop: "scale",
  });
}
