/**
 * cloudinaryUrl(url, width)
 *
 * Optimizes Cloudinary image URLs by injecting automatic format, quality,
 * and responsive width transformations right after the "/upload/" path segment.
 * Returns non-Cloudinary or local image paths completely unchanged.
 *
 * @param {string} url - Original image URL
 * @param {number} width - Target width in pixels (e.g. 900 for cards, 200 for thumbnails)
 * @returns {string} Optimized URL or original URL
 */
export function cloudinaryUrl(url, width) {
  if (!url || typeof url !== "string") return "";

  // Only transform Cloudinary URLs
  if (url.includes("res.cloudinary.com") && url.includes("/upload/")) {
    const transformation = width ? `f_auto,q_auto,w_${Math.round(width)}` : "f_auto,q_auto";
    return url.replace(/\/upload\/(?:v\d+\/)?/, (match) => {
      // If version is already part of match or after
      return `/upload/${transformation}/`;
    });
  }

  return url;
}

export default cloudinaryUrl;
