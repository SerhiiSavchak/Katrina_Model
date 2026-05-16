/**
 * High-quality editorial placeholders (Unsplash).
 * Replace with production assets later — swap URLs or switch data back to /public paths.
 */
export function unsplashEditorial(photoSlug: string, width = 1800) {
  return `https://images.unsplash.com/${photoSlug}?auto=format&fit=crop&w=${width}&q=88`
}

/** Intro / statement column — studio fashion portrait */
export const introSectionImage = unsplashEditorial("photo-1524504388940-b1c1722653e1", 1600)

/** About — editorial portrait, calm crop */
export const aboutSectionImage = unsplashEditorial("photo-1529626455594-4ff0802cfb7e", 1600)

export const portfolioRemoteImages: Record<
  string,
  { src: string; objectPosition: string }
> = {
  "1": { src: unsplashEditorial("photo-1515886657613-9f3515b0c78f"), objectPosition: "50% 18%" },
  "2": { src: unsplashEditorial("photo-1539109136881-3ba061e47872"), objectPosition: "52% 35%" },
  "3": { src: unsplashEditorial("photo-1522337360788-8b13dee7a37e"), objectPosition: "50% 22%" },
  "4": { src: unsplashEditorial("photo-1534528741775-53994a69daeb"), objectPosition: "50% 22%" },
  "5": { src: unsplashEditorial("photo-1509631179647-b0176f404ebb"), objectPosition: "50% 25%" },
  "6": { src: unsplashEditorial("photo-1490481651871-ab68de25d43d"), objectPosition: "50% 20%" },
  "7": { src: unsplashEditorial("photo-1483985988355-763728e1935b"), objectPosition: "45% 28%" },
  "8": { src: unsplashEditorial("photo-1558618666-fcd25c85cd64"), objectPosition: "50% 22%" },
  "9": { src: unsplashEditorial("photo-1517841905240-472988babdf9"), objectPosition: "50% 28%" },
}

export const storiesRemoteImages: Record<string, { src: string; objectPosition: string }> = {
  "1": { src: unsplashEditorial("photo-1515886657613-9f3515b0c78f", 2000), objectPosition: "42% 25%" },
  "2": { src: unsplashEditorial("photo-1516576335081-94887d1346cc", 2000), objectPosition: "50% 28%" },
  "3": { src: unsplashEditorial("photo-1503342217505-b0a15ec326c7", 2000), objectPosition: "48% 30%" },
}
