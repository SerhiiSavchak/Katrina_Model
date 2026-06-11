import { portfolioRemoteImages } from "@/data/remote-images"

export type PortfolioCategory = "All" | "Fashion" | "Studio" | "Beauty" | "Art Nude" | "Editorial"

export interface PortfolioItem {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "All">
  image: string
  /** CSS object-position, e.g. "50% 20%" */
  objectPosition?: string
  aspectRatio: "portrait" | "landscape" | "square"
  year?: string
  location?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Soft Studio Light",
    category: "Studio",
    image: "/images/portfolio/portfolio-01.jpg",
    objectPosition: "50% 22%",
    aspectRatio: "portrait",
    year: "2024",
    location: "Kyiv",
  },
  {
    id: "2",
    title: "Berlin Editorial",
    category: "Editorial",
    image: "/images/portfolio/portfolio-02.jpg",
    objectPosition: "38% 42%",
    aspectRatio: "landscape",
    year: "2024",
    location: "Berlin",
  },
  {
    id: "3",
    title: "Beauty Portrait",
    category: "Beauty",
    image: "/images/portfolio/portfolio-03.jpg",
    objectPosition: "50% 20%",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "4",
    title: "Body Study I",
    category: "Art Nude",
    image: "/images/portfolio/portfolio-04.jpg",
    objectPosition: "52% 28%",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "5",
    title: "Fashion Test",
    category: "Fashion",
    image: "/images/portfolio/portfolio-05.jpg",
    objectPosition: "50% 26%",
    aspectRatio: "square",
    year: "2024",
  },
  {
    id: "6",
    title: "Morning Series",
    category: "Studio",
    image: "/images/portfolio/portfolio-06.jpg",
    objectPosition: "50% 24%",
    aspectRatio: "portrait",
    year: "2024",
  },
  {
    id: "7",
    title: "Studio Form",
    category: "Art Nude",
    image: portfolioRemoteImages["7"].src,
    objectPosition: portfolioRemoteImages["7"].objectPosition,
    aspectRatio: "portrait",
    year: "2023",
    location: "Kyiv",
  },
  {
    id: "8",
    title: "Kyiv Fashion Week",
    category: "Fashion",
    image: portfolioRemoteImages["8"].src,
    objectPosition: portfolioRemoteImages["8"].objectPosition,
    aspectRatio: "landscape",
    year: "2023",
    location: "Kyiv",
  },
  {
    id: "9",
    title: "Editorial Figure",
    category: "Art Nude",
    image: portfolioRemoteImages["9"].src,
    objectPosition: portfolioRemoteImages["9"].objectPosition,
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
