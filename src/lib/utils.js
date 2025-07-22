import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the site URL based on environment
 * @returns {string} The site URL
 */
export function getSiteUrl() {
  // Use environment variable if available, otherwise fallback to localhost
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}
