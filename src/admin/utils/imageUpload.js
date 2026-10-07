/**
 * imageUpload.js
 * In-browser canvas image compression & Cloudinary unsigned upload.
 */

/**
 * Resize and compress an image file in browser using HTML5 Canvas.
 * Max dimension: 1200px (longest side).
 * Output: WebP at ~0.82 quality (fallback to JPEG).
 */
export async function compressImage(file) {
  if (!file || !file.type.startsWith("image/")) {
    throw new Error("Selected file must be an image (JPG, PNG, WebP).");
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error("Image file size must be less than 10 MB.");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX_DIM = 1200;
        let { width, height } = img;

        if (width > MAX_DIM || height > MAX_DIM) {
          if (width > height) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          } else {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Try WebP first, fallback to JPEG
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              canvas.toBlob(
                (jpegBlob) => {
                  if (jpegBlob) resolve(jpegBlob);
                  else reject(new Error("Canvas export failed"));
                },
                "image/jpeg",
                0.85
              );
            }
          },
          "image/webp",
          0.82
        );
      };
      img.onerror = () => reject(new Error("Failed to decode image"));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.readAsDataURL(file);
  });
}

/**
 * Upload compressed image to Cloudinary using unsigned upload preset.
 *
 * @param {File|Blob} file - Image blob or file
 * @returns {Promise<string>} Cloudinary secure_url
 */
export async function uploadToCloudinary(file) {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset || cloudName.includes("your_cloudinary")) {
    throw new Error(
      "Cloudinary is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in your .env.local file."
    );
  }

  const compressedBlob = await compressImage(file);

  const formData = new FormData();
  formData.append("file", compressedBlob);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", "k2n");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Upload failed with HTTP ${response.status}`
    );
  }

  const data = await response.json();
  return data.secure_url;
}

export default {
  compressImage,
  uploadToCloudinary
};
