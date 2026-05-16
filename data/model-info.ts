export type ModelStatId =
  | "height"
  | "bust"
  | "waist"
  | "hips"
  | "hair"
  | "eyes"
  | "shoe"
  | "location"
  | "availability"

export interface ModelStat {
  id: ModelStatId
  value: string
}

export const modelStats: ModelStat[] = [
  { id: "height", value: "175 cm" },
  { id: "bust", value: "86" },
  { id: "waist", value: "62" },
  { id: "hips", value: "90" },
  { id: "hair", value: "Brown" },
  { id: "eyes", value: "Brown" },
  { id: "shoe", value: "38 EU" },
  { id: "location", value: "Ukraine / Europe" },
  { id: "availability", value: "International bookings" },
]
