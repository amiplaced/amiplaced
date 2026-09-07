export interface PricingResult {
  originalPrice: number;
  finalPrice: number;
  discountAmount: number;
  hasDiscount: boolean;
  bundleName?: string;
}

/**
 * Calculates total bundle pricing and flat amount discounts based on selected service IDs:
 * 1. Single service: Original price (No discount)
 * 2. Resume (1,200) + LinkedIn (3,200) = 4,400 -> Discounted price: 3,600 (Save 800)
 * 3. Resume (1,200) + Applications (4,500) = 5,700 -> Discounted price: 4,700 (Save 1,000)
 * 4. LinkedIn (3,200) + Applications (4,500) = 7,700 -> Discounted price: 5,600 (Save 2,100)
 * 5. All 3 Services = 8,900 -> Discounted price: 6,800 (Save 2,100)
 */
export function calculateStackPricing(selectedIds: string[]): PricingResult {
  const hasResume = selectedIds.includes("resume");
  const hasLinkedin = selectedIds.includes("linkedin");
  const hasApplications = selectedIds.includes("applications");

  const count = [hasResume, hasLinkedin, hasApplications].filter(Boolean).length;

  let originalPrice = 0;
  if (hasResume) originalPrice += 1200;
  if (hasLinkedin) originalPrice += 3200;
  if (hasApplications) originalPrice += 4500;

  if (count <= 1) {
    return {
      originalPrice,
      finalPrice: originalPrice,
      discountAmount: 0,
      hasDiscount: false,
    };
  }

  // All 3 Services
  if (hasResume && hasLinkedin && hasApplications) {
    return {
      originalPrice: 8900,
      finalPrice: 6800,
      discountAmount: 2100,
      hasDiscount: true,
      bundleName: "Full Stack Bundle",
    };
  }

  // 2 Services combinations
  if (hasResume && hasLinkedin) {
    return {
      originalPrice: 4400,
      finalPrice: 3600,
      discountAmount: 800,
      hasDiscount: true,
      bundleName: "Resume + LinkedIn Combo",
    };
  }

  if (hasResume && hasApplications) {
    return {
      originalPrice: 5700,
      finalPrice: 4700,
      discountAmount: 1000,
      hasDiscount: true,
      bundleName: "Resume + Applications Combo",
    };
  }

  if (hasLinkedin && hasApplications) {
    return {
      originalPrice: 7700,
      finalPrice: 5600,
      discountAmount: 2100,
      hasDiscount: true,
      bundleName: "LinkedIn + Applications Combo",
    };
  }

  return {
    originalPrice,
    finalPrice: originalPrice,
    discountAmount: 0,
    hasDiscount: false,
  };
}
