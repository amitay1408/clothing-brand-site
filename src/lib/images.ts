/**
 * Unsplash placeholder images — replace with actual brand photography.
 * Each URL is a specific photo sized and cropped for its use case.
 */
const BASE = "https://images.unsplash.com";
const FIT  = "auto=format&fit=crop&q=80";

export const IMG = {
  // Mediterranean sea at golden hour — hero & lifestyle sections
  heroCoastal:   `${BASE}/photo-1507525428034-b723cf961d3e?${FIT}&w=1600&h=900`,

  // Man on Mediterranean waterfront / pier — editorial sections
  editorialPier: `${BASE}/photo-1516762689617-e1cffcef479d?${FIT}&w=900&h=1200`,

  // Close-up washed/raw fabric texture — texture / detail sections
  fabricTexture: `${BASE}/photo-1558769132-cb1aea458c5e?${FIT}&w=900&h=900`,

  // Minimal clothing product shot on white — shop / product sections
  productTee:    `${BASE}/photo-1521572163474-6864f9cf17ab?${FIT}&w=900&h=1200`,

  // Vintage family gathering, warm sepia — archival / about sections
  vintageFamily: `${BASE}/photo-1542314831-068cd1dbfeeb?${FIT}&w=900&h=900`,
} as const;
