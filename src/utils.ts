/**
 * Returns the correct path for assets based on the environment
 *
 * This function handles the differences between:
 * - Development (localhost:5173) - images should be loaded directly from /images/...
 * - Production (GitHub Pages) - images should be loaded from /smrenovation/images/...
 */
export function getAssetPath(path: string): string {
  // Make sure to remove any leading slash for consistency
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;

  // For development mode, use the standard path
  if (import.meta.env.MODE === "development") {
    return `/${cleanPath}`;
  }

  // For production (GitHub Pages), add the base path
  return `/smrenovation/${cleanPath}`;
}
