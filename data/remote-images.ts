/**
 * Local model media paths — hero poster, about / intro portraits, OG image.
 * All model stills come from the approved final-photos set.
 */

const FINAL = "/images/final-photos" as const

/** Intro — секція «У кадрі» одразу під hero (`IntroSection`). */
export const introSectionImage = `${FINAL}/IMG_3461.JPG`

/** About — personal beauty / paint portrait (used ONLY in About). */
export const aboutSectionImage = `${FINAL}/IMG_3470.JPG`

/** Open Graph / social share image (safe editorial, not art-nude). */
export const ogImage = `${FINAL}/IMG_3473.JPG`

/** Hero poster (WebP) — instant first paint layer under the video. */
export const heroPosterImage = "/images/hero/hero-poster.webp"

/** JPG variant for the native `<video poster>` attribute. */
export const heroPosterJpg = "/images/hero/hero-poster.jpg"

/** Hero video — single optimized MP4 (muted, looped). */
export const heroVideoSrc = "/videos/hero/hero-video.mp4"
