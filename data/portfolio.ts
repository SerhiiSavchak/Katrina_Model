export type PortfolioCategory = "All" | "Fashion" | "Studio" | "Beauty" | "Art Nude" | "Editorial"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  image: string
  aspectRatio: "portrait" | "landscape" | "square"
  year?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Soft Studio Light",
    category: "Studio",
    image: "/images/portfolio/portfolio-01.jpg",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "2",
    title: "Berlin Editorial",
    category: "Editorial",
    image: "/images/portfolio/portfolio-02.jpg",
    aspectRatio: "landscape",
    year: "2024",
  },
  {
    id: "3",
    title: "Beauty Portrait",
    category: "Beauty",
    image: "/images/portfolio/portfolio-03.jpg",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "4",
    title: "Body Study I",
    category: "Art Nude",
    image: "/images/portfolio/portfolio-04.jpg",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "5",
    title: "Fashion Test",
    category: "Fashion",
    image: "/images/portfolio/portfolio-05.jpg",
    aspectRatio: "square",
    year: "2024",
  },
  {
    id: "6",
    title: "Morning Series",
    category: "Studio",
    image: "/images/portfolio/portfolio-06.jpg",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "7",
    title: "Studio Form",
    category: "Art Nude",
    image: "/images/portfolio/portfolio-01.jpg",
    aspectRatio: "portrait",
    year: "2023",
  },
  {
    id: "8",
    title: "Kyiv Fashion Week",
    category: "Fashion",
    image: "/images/portfolio/portfolio-02.jpg",
    aspectRatio: "landscape",
    year: "2023",
  },
  {
    id: "9",
    title: "Editorial Figure",
    category: "Art Nude",
    image: "/images/portfolio/portfolio-03.jpg",
    aspectRatio: "portrait",
    year: "2023",
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
