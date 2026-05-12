export type PortfolioCategory = "All" | "Fashion" | "Studio" | "Beauty" | "Art Nude" | "Editorial"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  image: string
  aspectRatio: "portrait" | "landscape" | "square"
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Soft Studio Light",
    category: "Studio",
    image: "/images/portfolio/portfolio-01.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "2",
    title: "Berlin Editorial",
    category: "Editorial",
    image: "/images/portfolio/portfolio-02.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "3",
    title: "Beauty Portrait",
    category: "Beauty",
    image: "/images/portfolio/portfolio-03.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "4",
    title: "Art Nude Study",
    category: "Art Nude",
    image: "/images/portfolio/portfolio-04.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "5",
    title: "Fashion Test",
    category: "Fashion",
    image: "/images/portfolio/portfolio-05.jpg",
    aspectRatio: "square",
  },
  {
    id: "6",
    title: "Morning Series",
    category: "Studio",
    image: "/images/portfolio/portfolio-06.jpg",
    aspectRatio: "portrait",
  },
]

export const categories: PortfolioCategory[] = [
  "All",
  "Fashion",
  "Studio",
  "Beauty",
  "Art Nude",
  "Editorial",
]
